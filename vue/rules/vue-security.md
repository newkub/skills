# Vue Security Best Practices

## 1. Never Use Non-trusted Content as Templates (ห้ามใช้ Non-trusted Content เป็น Templates)

### เหตุผล (Rationale)

กฏความปลอดภัยที่สำคัญที่สุดใน Vue คือไม่ใช้ non-trusted, user-provided content เป็น component template ของคุณ Vue templates ถูก compile เป็น JavaScript และ expressions ภายในถูก execute การอนุญาตให้ user content ใน templates เทียบเท่ากับการอนุญาต arbitrary JavaScript execution ซึ่งอาจนำไปสู่ Cross-Site Scripting (XSS) attacks หรือแม้แต่ server breaches ระหว่าง Server-Side Rendering (SSR)

### วิธีที่ไม่ควรทำ (Bad Practice)

Binding user-provided string โดยตรงเข้าไปใน `template` option ของ component อันตรายมาก

````javascript
// NEVER DO THIS
Vue.createApp({
  template: `<div>` + userProvidedString + `</div>`
}).mount('#app')
````

### วิธีที่ควรทำ (Good Practice)

ใช้ templates ที่ถูกควบคุมทั้งหมดโดยคุณและเก็บไว้ใน project files ของคุณเสมอ หากคุณต้องการ render dynamic content ใช้ safe mechanisms ของ Vue เช่น text interpolation หรือ `v-text`

````vue
<script setup>
import { ref } from 'vue'

const userProvidedString = ref('<script>alert("XSS Attack!")</script>')
</script>

<template>
  <!-- Vue automatically escapes this, preventing the script from running -->
  <div>{{ userProvidedString }}</div>
</template>
````

---

## 2. Avoid HTML Injection with `v-html` (หลีกเลี่ยง HTML Injection ด้วย `v-html`)

### เหตุผล (Rationale)

Vue escapes HTML content ใน bindings โดยอัตโนมัติเพื่อป้องกัน XSS อย่างไรก็ตาม `v-html` directive อนุญาตให้คุณ render raw HTML การใช้ `v-html` พร้อม unsanitized user content เป็น security risk ที่สำคัญเพราะมันสามารถ inject malicious scripts ลงในหน้าของคุณ

### วิธีที่ไม่ควรทำ (Bad Practice)

Rendering HTML จาก user source โดยตรงด้วย `v-html`

````vue
<script setup>
const userProvidedHtml = '<img src="x" onerror="alert(\'XSS Attack!\')">'
</script>

<template>
  <!-- This will execute the script in the onerror attribute -->
  <div v-html="userProvidedHtml"></div>
</template>
````

### วิธีที่ควรทำ (Good Practice)

ใช้ `v-html` เฉพาะบน fully trusted content หากคุณต้อง render user-provided rich text sanitize มันบน backend โดยใช้ robust library (เช่น DOMPurify) ก่อนบันทึกลงใน database หลีกเลี่ยงการ sanitize บน client-side เป็น primary defense

````vue
<script setup>
// Assume this content has been sanitized on the backend
const sanitizedHtml = '<p>This is safe, sanitized content.</p>'
</script>

<template>
  <div v-html="sanitizedHtml"></div>
</template>
````

---

## 3. Sanitize User-Provided URLs (Sanitize URLs ที่ User ให้)

### เหตุผล (Rationale)

Binding user-provided URLs ไปยัง attributes เช่น `href` อาจเป็นอันตราย Malicious URLs สามารถใช้ `javascript:` protocol เพื่อ execute code เมื่อ user กด link

### วิธีที่ไม่ควรทำ (Bad Practice)

Binding URL โดยตรงจาก user source โดยไม่มี validation หรือ sanitization

````vue
<script setup>
const userProvidedUrl = 'javascript:alert(\'XSS Attack!\')'
</script>

<template>
  <!-- Clicking this link will execute the JavaScript -->
  <a :href="userProvidedUrl">Click me</a>
</template>
````

### วิธีที่ควรทำ (Good Practice)

All user-provided URLs ควรถูก sanitize บน **backend** ก่อนถูก store นี่เป็นวิธีที่เชื่อถือได้ที่สุดในการปกป้องทุก clients (web, mobile, ฯลฯ) หากคุณต้องจัดการบน frontend ใช้ library เช่น `sanitize-url` เป็น secondary precaution

````javascript
// Backend (e.g., Node.js with sanitize-url)
import { sanitizeUrl } from "@braintree/sanitize-url";

const userInput = 'javascript:alert("XSS")';
const sanitizedUrl = sanitizeUrl(userInput); // Becomes 'about:blank'

// Now, it's safe to store sanitizedUrl in the database and send to the client.
````

---

## 4. Prevent Style and JavaScript Injection (ป้องกัน Style และ JavaScript Injection)

### เหตุผล (Rationale)

- **Style Injection:** การอนุญาตให้ users ควบคุม CSS อาจนำไปสู่ "clickjacking" โดยที่ attacker สามารถ style malicious element (เช่น link) เพื่อครอบ legitimate UI element หลอก users ให้กดมัน
- **JavaScript Injection:** Binding user-provided content ไปยัง event attributes (เช่น `onclick`, `onmouseover`) เป็น direct path ไปยัง XSS

### วิธีที่ไม่ควรทำ (Bad Practice)

Binding user-provided objects ไปยัง `:style` หรือ strings ไปยัง event handlers

````vue
<script setup>
const userStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  opacity: 0 // Creates an invisible layer over the whole page
};

const userJs = 'alert("XSS Attack!")'
</script>

<template>
  <!-- Potentially allows clickjacking -->
  <a href="https://malicious-site.com" :style="userStyles"></a>

  <!-- Executes arbitrary JavaScript -->
  <button :onclick="userJs">Click me</button>
</template>
````

### วิธีที่ควรทำ (Good Practice)

- **For Styles:** ใช้ object syntax สำหรับ `:style` และอนุญาตให้ users ควบคุม specific, safe properties เท่านั้น อย่า allow ให้พวกเขาให้ entire style object
- **For JavaScript:** อย่า bind user-provided strings ไปยัง event handlers ใช้ event listeners ที่เรียก predefined methods

````vue
<script setup>
import { ref } from 'vue'

// Only allow specific, safe CSS properties to be user-controlled
const userProvidedColor = ref('blue')

function handleClick() {
  // Safe, predefined logic
  console.log('Button clicked!');
}
</script>

<template>
  <a href="/safe-link" :style="{ color: userProvidedColor }">Safe Link</a>
  <button @click="handleClick">Safe Button</button>
</template>
````

## อ้างอิง (References)

- [Vue.js Official Security Guide](https://vuejs.org/guide/best-practices/security.html)
- [OWASP Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
