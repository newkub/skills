# List Optimization

## ภาพรวม

Techniques สำหรับ optimize lists ใน React applications

## 1. Virtualization

ใช้ `react-window` หรือ `react-virtualized` สำหรับ long lists

```bash
bun add react-window
```

```javascript
import { FixedSizeList } from 'react-window';

function Row({ index, style }) {
  return <div style={style}>Row {index}</div>;
}

function List() {
  return (
    <FixedSizeList
      height={400}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </FixedSizeList>
  );
}
```

## 2. Key Props

ใช้ stable keys สำหรับ list items

```javascript
// ❌ ไม่ดี
{items.map((item, index) => <Item key={index} />)}

// ✅ ดี
{items.map(item => <Item key={item.id} />)}
```

## 3. Pagination

แบ่งข้อมูลออกเป็น pages

```javascript
function PaginatedList({ items, itemsPerPage = 10 }) {
  const [page, setPage] = useState(0);
  
  const paginatedItems = items.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );
  
  return (
    <>
      {paginatedItems.map(item => <Item key={item.id} item={item} />)}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={setPage}
      />
    </>
  );
}
```

## สรุป

List optimization:
1. Virtualization - ใช้สำหรับ long lists
2. Key props - ใช้ stable keys
3. Pagination - แบ่งข้อมูลออกเป็น pages
