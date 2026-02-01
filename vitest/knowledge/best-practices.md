# Vitest Best Practices

## Concepts
การใช้ Vitest อย่างมีประสิทธิภาพต้องอาศัยความเข้าใจใน best practices ที่เหมาะสมกับแต่ละสถานการณ์ ทั้งการเขียน tests การจัดการโครงสร้าง และการทำงานร่วมกับ team

**Test Organization:** จัดรูปแบบ tests ให้มีโครงสร้างชัดเจนและ maintainable
**Performance:** ใช้ฟีเจอร์ของ Vitest อย่างเต็มประสิทธิภาพสำหรับความเร็ว
**Quality:** ตั้งค่า coverage และ quality gates สำหรับ code quality
**Collaboration:** ทำงานร่วมกับ team ผ่าน consistent patterns

## Best Practices
1. **Test Structure:** ใช้ `describe` สำหรับ grouping และ `it` สำหรับ individual tests
2. **Naming:** ตั้งชื่อ tests ที่บอกว่าทำอะไรและคาดหวังผลลัพธ์อะไร
3. **Setup/Teardown:** ใช้ `beforeEach`/`afterEach` สำหรับ cleanup
4. **Assertions:** ใช้ matchers ที่เฉพาะเจาะจงและ meaningful
5. **Mocking:** mock เฉพาะ external dependencies ไม่ใช่ internal logic
6. **Coverage:** ตั้งค่า coverage thresholds สำหรับ quality gates
7. **Performance:** ใช้ watch mode ใน development และ run mode ใน CI

## Examples
```typescript
// Good test structure
describe('UserService', () => {
  let userService: UserService
  let mockRepo: UserRepository

  beforeEach(() => {
    mockRepo = {
      findById: vi.fn(),
      save: vi.fn(),
    }
    userService = new UserService(mockRepo)
  })

  describe('findById', () => {
    it('should return user when found', async () => {
      const user = { id: 1, name: 'John' }
      mockRepo.findById.mockResolvedValue(user)

      const result = await userService.findById(1)

      expect(result).toEqual(user)
      expect(mockRepo.findById).toHaveBeenCalledWith(1)
    })

    it('should return null when not found', async () => {
      mockRepo.findById.mockResolvedValue(null)

      const result = await userService.findById(999)

      expect(result).toBeNull()
    })
  })

  describe('save', () => {
    it('should save user with validation', async () => {
      const user = { id: 1, name: 'John' }
      mockRepo.save.mockResolvedValue(user)

      const result = await userService.save(user)

      expect(result).toEqual(user)
      expect(mockRepo.save).toHaveBeenCalledWith(user)
    })

    it('should throw error for invalid user', async () => {
      const invalidUser = { id: 1, name: '' }

      await expect(userService.save(invalidUser))
        .rejects.toThrow('Invalid user name')
    })
  })
})

// Good configuration
// vitest.config.ts
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
})
```
