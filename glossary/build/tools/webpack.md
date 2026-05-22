# Webpack

## คำอธิบาย
Module bundler ยอดนิยมสำหรับ JavaScript applications

## ลักษณะเฉพาะ
- **Module Bundling**: รวม modules หลายๆ อันเป็น bundle เดียว
- **Loaders**: แปลงไฟล์ต่างๆ (TypeScript, SASS, images)
- **Plugins**: ขยายฟังก์ชันการทำงาน
- **Code Splitting**: แบ่งโค้ดตามต้องการ

## คุณสมบัติหลัก
- **Entry Points**: จุดเริ่มต้นของ application
- **Output**: กำหนดรูปแบบและที่อยู่ output files
- **Loaders**: ประมวลผลไฟล์ต่างๆ
- **Plugins**: จัดการ tasks ต่างๆ
- **Mode**: development/production configurations

## ตัวอย่างการตั้งค่า
```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

## ข้อดี
- Powerful and flexible
- Large ecosystem
- Production optimizations
- Community support

## ข้อเสีย
- Complex configuration
- Slow build times
- Steep learning curve
- Configuration overhead

## เหมาะกับ
- Large applications
- Complex build requirements
- Enterprise projects
- Custom build needs

---

**หมวดหมู่**: Build Tools
