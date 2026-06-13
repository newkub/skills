# Data Fetching Patterns

## ภาพรวม

Design patterns สำหรับ data fetching ใน React

## 1. SWR Pattern

Stale-While-Revalidate pattern

```javascript
function useSWR(key, fetcher) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher(key);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [key, fetcher]);
  
  return { data, error, isLoading };
}
```

## 2. Query Invalidation Pattern

Invalidate queries หลัง mutations

```javascript
function useCreateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
}
```

## สรุป

Data fetching patterns ช่วยให้:
- Efficient data management
- Automatic caching และ revalidation
- Optimistic updates
