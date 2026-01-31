---
name: Git Commit Guidelines
description: กฎเกี่ยวกับการเขียน commit messages ที่ดีและเป็นมาตรฐาน
priority: CRITICAL
condition: เมื่อทำการ commit ในทุก project
---

# Git Commit Guidelines

## เหตุผล

การมี commit messages ที่ดีและเป็นมาตรฐานทำให้การทำงานร่วมกับทีมและการ review code ง่ายขึ้นมาก

## ตัวอย่างที่ไม่ดี

```bash
# ไม่ดี: ไม่มีความหมาย
$ git commit -m "fix"

# ไม่ดี: ยาวเกินไป
$ git commit -m "fix the bug where the user cannot login because the database connection is not working properly and the server is returning a 500 error"

# ไม่ดี: ไม่มี whitespace
$ git commit -m "fix bug"

# ไม่ดี: ใช้ past tense
$ git commit -m "Fixed bug"

# ไม่ดี: รวมหลาย changes ใน commit เดียว
$ git commit -m "fix login, update styles, add tests"
```

## ตัวอย่างที่ดี

```bash
# ดี: สั้น ชัดเจน ใช้ imperative mood
$ git commit -m "Fix login authentication error"

# ดี: มีรายละเอียดเพิ่มเติม
$ git commit -m "Fix login authentication error

- Update authentication middleware to handle expired tokens
- Add proper error handling for invalid credentials
- Fix database connection timeout issue"

# ดี: ใช้ conventional commits
$ git commit -m "feat: add user authentication
- Implement JWT token validation
- Add login/logout endpoints
- Update user model with auth fields"
```

## กฎที่ต้องปฏิบัติตาม

### 1. ใช้ Imperative Mood

**กฎ:** เขียน commit message เป็น imperative mood ("Fix bug" ไม่ใช่ "Fixed bug" หรือ "Fixes bug")

**เหตุผล:** สอดคล้องกับ commit messages ที่สร้างโดย Git commands เช่น `git merge` และ `git revert`

**ตัวอย่าง:**
- ✅ `Fix login authentication error`
- ❌ `Fixed login authentication error`
- ❌ `Fixes login authentication error`

### 2. จำกัดความยาวของ Subject Line

**กฎ:** Subject line ไม่เกิน 50 ตัวอักษร

**เหตุผล:** ทำให้อ่านง่ายใน `git log` และเข้ากับ tools ต่างๆ

**ตัวอย่าง:**
- ✅ `Fix login authentication error` (31 ตัวอักษร)
- ❌ `Fix the login authentication error that was causing users to be unable to login` (78 ตัวอักษร)

### 3. ใช้ Blank Line คั่นระหว่าง Subject และ Body

**กฎ:** ใช้ blank line คั่นระหว่าง subject line และ body

**เหตุผล:** Tools เช่น `rebase` จะสับสนถ้าไม่มี blank line

**ตัวอย่าง:**
- ✅ 
  ```
  Fix login authentication error

  - Update authentication middleware
  - Add proper error handling
  ```
- ❌ 
  ```
  Fix login authentication error
  - Update authentication middleware
  - Add proper error handling
  ```

### 4. Wrap Body ที่ 72 ตัวอักษร

**กฎ:** Wrap body ที่ 72 ตัวอักษร

**เหตุผล:** ทำให้อ่านง่ายใน terminals และ email clients

**ตัวอย่าง:**
- ✅ 
  ```
  Fix login authentication error

  Update authentication middleware to handle expired tokens
  and add proper error handling for invalid credentials.
  ```
- ❌ 
  ```
  Fix login authentication error

  Update authentication middleware to handle expired tokens and add proper error handling for invalid credentials.
  ```

### 5. ใช้ Bullet Points ใน Body

**กฎ:** ใช้ bullet points สำหรับรายการใน body คั่นด้วย blank lines

**เหตุผล:** ทำให้อ่านง่ายและเป็นระเบียบ

**ตัวอย่าง:**
- ✅ 
  ```
  Fix login authentication error

  - Update authentication middleware
  - Add proper error handling
  - Fix database connection timeout
  ```
- ❌ 
  ```
  Fix login authentication error
  - Update authentication middleware
  - Add proper error handling
  - Fix database connection timeout
  ```

### 6. ทำแต่ละ Change เป็น Commit แยกกัน

**กฎ:** ทำแต่ละ change เป็น commit แยกกัน ไม่รวมหลาย changes ใน commit เดียว

**เหตุผล:** ทำให้ง่ายต่อการ review และ revert ถ้าจำเป็น

**ตัวอย่าง:**
- ✅ 
  ```
  $ git commit -m "Fix login authentication error"
  $ git commit -m "Update user styles"
  $ git commit -m "Add unit tests for login"
  ```
- ❌ 
  ```
  $ git commit -m "Fix login, update styles, add tests"
  ```

### 7. ตรวจสอบ Whitespace Errors

**กฎ:** รัน `git diff --check` ก่อน commit

**เหตุผล:** หลีกเลี่ยง whitespace errors ที่อาจรบกวน developers อื่น

**ตัวอย่าง:**
```bash
$ git diff --check
# ถ้าไม่มี output แสดงว่าไม่มี whitespace errors
```

### 8. ใช้ Descriptive Subject Lines

**กฎ:** Subject line ต้องอธิบาย change ได้ชัดเจน

**เหตุผล:** ทำให้เข้าใจว่า commit นี้ทำอะไรโดยไม่ต้องอ่าน body

**ตัวอย่าง:**
- ✅ `Fix login authentication error`
- ❌ `Fix bug`
- ❌ `Update code`

### 9. ใช้ Conventional Commits (แนะนำ)

**กฎ:** ใช้ conventional commits format: `<type>: <subject>`

**เหตุผล:** ทำให้ง่ายต่อการ generate changelogs และ automate processes

**Types ที่ใช้บ่อย:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**ตัวอย่าง:**
- ✅ `feat: add user authentication`
- ✅ `fix: login authentication error`
- ✅ `docs: update README`
- ✅ `test: add unit tests for login`

### 10. อธิบาย What และ Why ใน Body

**กฎ:** Body ควรอธิบายว่าทำไมต้องทำ change นี้ ไม่ใช่แค่ว่าทำอะไร

**เหตุผล:** ทำให้เข้าใจ context และ decision ที่ทำไป

**ตัวอย่าง:**
- ✅ 
  ```
  Fix login authentication error

  The previous implementation did not handle expired JWT tokens
  properly, causing users to be logged out unexpectedly. This
  fix adds proper token validation and refresh logic.
  ```
- ❌ 
  ```
  Fix login authentication error

  Updated code to fix the bug.
  ```

## ผลกระทบถ้าไม่ทำตาม

- ยากต่อการ review code
- ยากต่อการ understand history
- ยากต่อการ generate changelogs
- ยากต่อการ revert changes
- ทำให้ collaboration ยากขึ้น

## References

- [Git Book - Commit Guidelines](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
