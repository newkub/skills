# Best Practices - Ruby

## Style Guide

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | `user_name` |
| Methods | snake_case | `find_user` |
| Classes | PascalCase | `UserAccount` |
| Constants | SCREAMING_SNAKE | `MAX_SIZE` |
| Files | snake_case | `user_service.rb` |
| Symbols | snake_case | `:user_name` |

### Code Layout

```ruby
# Good
def greet(name)
  "Hello, #{name}!"
end

# Bad (inconsistent spacing)
def greet ( name )
  "Hello, #{  name  }!"
end
```

## Bundler

```bash
# Gemfile
source 'https://rubygems.org'

gem 'rails', '~> 7.0'
gem 'puma'

group :development do
  gem 'rubocop'
end
```

```bash
bundle install
bundle update
bundle exec rails server
```

## Testing

### RSpec

```ruby
RSpec.describe User do
  describe '#greet' do
    it 'returns greeting message' do
      user = User.new('Alice', 30)
      expect(user.greet).to eq("Hello, I'm Alice")
    end
  end
  
  describe '#adult?' do
    context 'when age is 18 or above' do
      it 'returns true' do
        user = User.new('Bob', 18)
        expect(user.adult?).to be true
      end
    end
  end
end
```

## Error Handling

```ruby
begin
  result = risky_operation
rescue StandardError => e
  puts "Error: #{e.message}"
  logger.error e.backtrace
rescue CustomError
  handle_custom_error
else
  puts "Success!"
ensure
  cleanup
end
```

## Performance Tips

```ruby
# Use symbols instead of strings as keys
# Good
user[:name]

# Bad
user["name"]

# Use lazy evaluation
data.lazy.map { |x| expensive(x) }.first(10)

# String building
# Good
parts << "a" << "b" << "c"
result = parts.join

# Bad
result = ""
parts.each { |p| result += p }
```

## Documentation

```ruby
# Inner documentation
class User
  # Finds a user by email
  # @param email [String]
  # @return [User, nil]
  def self.find_by_email(email)
    find_by(email: email)
  end
end
```
