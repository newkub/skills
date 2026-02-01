# Next.js Data Fetching

## 1. Fetching in Server Components
- **Direct fetch calls** ใน server components
- **Automatic caching** สำหรับ GET requests
- **Streaming support** สำหรับ large responses
- **Error handling** ด้วย try/catch blocks

## 2. Caching Strategies
- **Request memoization** ภายใน render pass
- **Data cache** ข้าม requests และ deployments
- **Full route cache** สำหรับ static pages
- **Revalidation options** ตาม time หรือ on-demand

## 3. Cache Control
- **fetch options** ด้วย `cache` parameter
- **revalidate** ตาม time intervals
- **tags** สำหรับ on-demand revalidation
- **no-store** สำหรับ dynamic data

## 4. Client-side Fetching
- **useEffect** สำหรับ client-side data fetching
- **SWR** สำหรับ data synchronization
- **React Query** สำหรับ complex data management
- **Custom hooks** สำหรับ reusable fetching logic

## 5. Data Fetching Patterns
- **Parallel fetching** ด้วย Promise.all
- **Sequential fetching** สำหรับ dependent data
- **Preloading data** สำหรา better performance
- **Background fetching** สำหรับ non-critical data

## 6. API Integration
- **REST APIs** ด้วย standard fetch
- **GraphQL APIs** ด้วย Apollo หรือ Relay
- **WebSocket connections** สำหรับ real-time data
- **Third-party services** ด้วย proper authentication

## 7. Error Handling
- **Network errors** และ timeout handling
- **API error responses** และ status codes
- **Retry logic** สำหรับ failed requests
- **Fallback data** สำหรับ graceful degradation

## 8. Performance Optimization
- **Data prefetching** สำหรับ anticipated needs
- **Incremental loading** สำหรับ large datasets
- **Compression** สำหรับ response data
- **CDN integration** สำหรับ static assets
