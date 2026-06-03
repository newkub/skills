# Architecture

## .NET Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│              (Web, Desktop, Mobile UI)                     │
├─────────────────────────────────────────────────────────────┤
│                    Application Layer                        │
│              (Use Cases, Commands, Queries)                 │
├─────────────────────────────────────────────────────────────┤
│                     Domain Layer                            │
│            (Entities, Value Objects, Domain Services)       │
├─────────────────────────────────────────────────────────────┤
│                  Infrastructure Layer                       │
│        (Repositories, External Services, Database)          │
└─────────────────────────────────────────────────────────────┘
```

## Clean Architecture

```
src/
├── MyApp.Domain/
│   ├── Entities/
│   ├── ValueObjects/
│   ├── Interfaces/
│   └── Services/
├── MyApp.Application/
│   ├── DTOs/
│   ├── Interfaces/
│   ├── Services/
│   └── UseCases/
├── MyApp.Infrastructure/
│   ├── Data/
│   ├── Repositories/
│   ├── Services/
│   └── Migrations/
└── MyApp.Api/
    ├── Controllers/
    ├── Middleware/
    └── Program.cs
```

## Domain Layer

### Entities
```csharp
public class Order
{
    public Guid Id { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public OrderStatus Status { get; private set; }
    public decimal Total { get; private set; }
    public List<OrderItem> Items { get; private set; }

    private Order() { } // For EF Core

    public static Order Create(Guid customerId)
    {
        return new Order
        {
            Id = Guid.NewGuid(),
            CreatedAt = DateTime.UtcNow,
            Status = OrderStatus.Pending,
            Items = new List<OrderItem>()
        };
    }

    public void AddItem(Product product, int quantity)
    {
        var item = OrderItem.Create(this.Id, product, quantity);
        Items.Add(item);
        Total += item.Subtotal;
    }

    public void Complete() => Status = OrderStatus.Completed;
    public void Cancel() => Status = OrderStatus.Cancelled;
}
```

### Value Objects
```csharp
public readonly record struct Money
{
    public decimal Amount { get; init; }
    public string Currency { get; init; }

    public static Money operator +(Money a, Money b)
    {
        if (a.Currency != b.Currency)
            throw new InvalidOperationException("Currency mismatch");
        return new Money { Amount = a.Amount + b.Amount, Currency = a.Currency };
    }
}
```

## Application Layer

### Use Cases
```csharp
public record CreateOrderCommand(Guid CustomerId, List<OrderItemDto> Items);
public record OrderDto(Guid Id, string Status, decimal Total);

public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderDto>
{
    private readonly IOrderRepository _repository;

    public CreateOrderHandler(IOrderRepository repository)
    {
        _repository = repository;
    }

    public async Task<OrderDto> Handle(CreateOrderCommand request)
    {
        var order = Order.Create(request.CustomerId);

        foreach (var item in request.Items)
        {
            var product = await _productRepository.GetByIdAsync(item.ProductId);
            order.AddItem(product, item.Quantity);
        }

        await _repository.AddAsync(order);
        return new OrderDto(order.Id, order.Status.ToString(), order.Total);
    }
}
```

## Infrastructure Layer

### Repository Implementation
```csharp
public class EfOrderRepository : IOrderRepository
{
    private readonly AppDbContext _context;

    public EfOrderRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Order?> GetByIdAsync(Guid id)
    {
        return await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == id);
    }

    public async Task AddAsync(Order order)
    {
        await _context.Orders.AddAsync(order);
        await _context.SaveChangesAsync();
    }
}
```

## Presentation Layer

### API Controllers
```csharp
[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IMediator _mediator;

    public OrdersController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateOrderRequest request)
    {
        var command = new CreateOrderCommand(request.CustomerId, request.Items);
        var result = await _mediator.Send(command);
        return Created($"/orders/{result.Id}", result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var result = await _mediator.Send(new GetOrderQuery(id));
        return result is null ? NotFound() : Ok(result);
    }
}
```

## Dependency Injection

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Application services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IOrderRepository, EfOrderRepository>();

// Infrastructure
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// MediatR
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(typeof(CreateOrderHandler).Assembly));

var app = builder.Build();
```

## Cross-Cutting Concerns

### Middleware
```csharp
app.UseExceptionHandler(exceptionHandlerApp => 
{
    exceptionHandlerApp.Run(async context =>
    {
        context.Response.ContentType = "application/json";
        var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;
        var response = new ErrorResponse(exception?.Message);
        await context.Response.WriteAsJsonAsync(response);
    });
});

// Authentication & Authorization
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
```

## CQRS Pattern

```
Command: Modify state (Create, Update, Delete)
Query: Read state (Read)
```

```csharp
// Commands
public record CreateProductCommand(string Name, decimal Price);
public record UpdateProductCommand(Guid Id, string Name, decimal Price);

// Queries
public record GetProductByIdQuery(Guid Id);
public record GetAllProductsQuery(int Page, int PageSize);

// Separate handlers
public class CreateProductHandler : IRequestHandler<CreateProductCommand, ProductDto>;
public class GetProductByIdHandler : IRequestHandler<GetProductByIdQuery, ProductDto>;
```