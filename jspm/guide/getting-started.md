# Getting Started with JSPM

## Quick Start

```bash
# 1. Install JSPM globally
npm install -g jspm

# 2. Initialize new project
jspm init my-project

# 3. Start development server
cd my-project
jspm serve
```

## Project Structure

หลังจาก initialization จะได้ project structure:

my-project/
├── .gitignore
├── index.html           # Main HTML with import map
├── package.json         # Project manifest
├── tsconfig.json        # TypeScript config (if enabled)
└── src/
    └── index.ts         # Main entry point

## Basic index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>my-project</title>
  <script src="importmap.js"></script>
  <script 
    async 
    crossorigin="anonymous" 
    src="https://ga.jspm.io/npm:es-module-shims@2.5.1/dist/es-module-shims.js"
  ></script>
  <script type="module">
    import "my-project";
  </script>
</head>
<body></body>
</html>
```

## Basic src/index.ts

```typescript
import * as lit from "lit";

class MyElement extends lit.LitElement {
  static properties = {
    message: { type: String },
  };
  
  constructor() {
    super();
    this.message = "Hello from JSPM!";
  }
  
  render() {
    return lit.html`<div>${this.message}</div>`;
  }
}

customElements.define("my-element", MyElement);
document.body.innerHTML = "<my-element></my-element>";
```

## CSS Import

```typescript
import style from '"'"'./landing.css'"'"' with { type: '"'"'css'"'"' };

if (!document.adoptedStyleSheets.includes(style)) {
  document.adoptedStyleSheets.push(style);
}
```

## Next Steps

- Installation - รายละเอียดการติดตั้ง
- Configuration - การตั้งค่า package.json
- All Features - คุณสมบัติทั้งหมด
