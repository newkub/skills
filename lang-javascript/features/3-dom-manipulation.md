---
name: javascript-dom-manipulation
description: DOM manipulation และ event handling ใน JavaScript
goal: ให้นักพัฒนาสามารถจัดการ DOM elements และ events ได้อย่างมีประสิทธิภาพ
outcome: สามารถสร้าง แก้ไข และจัดการ HTML elements พร้อม event handling
---

# DOM Manipulation

## Concepts
DOM (Document Object Model) คือการแสดง HTML document เป็น tree structure ที่ JavaScript สามารถจัดการได้ DOM manipulation คือการเปลี่ยนแปลง structure, style, และ content ของ HTML elements

## Best Practices
- ใช้ querySelector และ querySelectorAll สำหรับ element selection
- ใช้ addEventListener สำหรับ event handling
- ใช้ createElement และ appendChild สำหรับ dynamic content
- ใช้ classList แทน className สำหรับ CSS classes
- หลีกเลี่ยง inline styles ให้ใช้ CSS classes แทน
- ใช้ event delegation สำหรับ performance

## Examples

### Element Selection
```javascript
// Select single element
const button = document.querySelector('#myButton');
const container = document.querySelector('.container');
const firstDiv = document.querySelector('div');

// Select multiple elements
const allButtons = document.querySelectorAll('button');
const containers = document.querySelectorAll('.container');
const allDivs = document.querySelectorAll('div');

// Select with complex selectors
const activeButton = document.querySelector('button.active');
const nestedItem = document.querySelector('.menu .item');
const dataElements = document.querySelectorAll('[data-id]');

// Check if element exists
if (button) {
  console.log('Button found');
}
```

### Event Handling
```javascript
// Add event listener
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Event listener with arrow function
button.addEventListener('click', () => {
  console.log('Arrow function handler');
});

// Event listener with parameters
button.addEventListener('click', (event) => {
  console.log('Event object:', event);
  console.log('Target:', event.target);
});

// Multiple event types
const input = document.querySelector('#myInput');
input.addEventListener('input', (e) => {
  console.log('Input value:', e.target.value);
});

input.addEventListener('focus', () => {
  console.log('Input focused');
});

input.addEventListener('blur', () => {
  console.log('Input blurred');
});

// Remove event listener
const handleClick = () => console.log('Clicked');
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event delegation
const list = document.querySelector('#myList');
list.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log('List item clicked:', e.target.textContent);
  }
});
```

### Element Creation and Manipulation
```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'New div element';
newDiv.className = 'new-element';

// Set attributes
newDiv.setAttribute('data-id', '123');
newDiv.id = 'uniqueId';

// Add to DOM
const container = document.querySelector('.container');
container.appendChild(newDiv);

// Insert before existing element
const referenceElement = document.querySelector('#reference');
container.insertBefore(newDiv, referenceElement);

// Clone element
const clonedDiv = newDiv.cloneNode(true);
container.appendChild(clonedDiv);

// Remove element
const oldElement = document.querySelector('.old-element');
if (oldElement) {
  oldElement.remove();
}

// Replace element
const parent = document.querySelector('#parent');
const newElement = document.createElement('span');
const existingElement = document.querySelector('#existing');
parent.replaceChild(newElement, existingElement);
```

### Style Manipulation
```javascript
const element = document.querySelector('.my-element');

// Direct style (not recommended)
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';

// Using CSS classes (recommended)
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');

// Check if class exists
if (element.classList.contains('active')) {
  console.log('Element has active class');
}

// Replace class
element.classList.replace('old-class', 'new-class');

// Multiple classes
element.classList.add('class1', 'class2', 'class3');
element.classList.remove('class1', 'class2');

// Get computed styles
const computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);
console.log(computedStyle.fontSize);
```

### Content Manipulation
```javascript
const element = document.querySelector('#content');

// Get and set text content
console.log(element.textContent); // Get text
element.textContent = 'New text content'; // Set text

// Get and set HTML content
console.log(element.innerHTML); // Get HTML
element.innerHTML = '<strong>Bold text</strong>'; // Set HTML

// Insert HTML
element.insertAdjacentHTML('beforebegin', '<p>Before</p>');
element.insertAdjacentHTML('afterbegin', '<p>After begin</p>');
element.insertAdjacentHTML('beforeend', '<p>Before end</p>');
element.insertAdjacentHTML('afterend', '<p>After</p>');

// Create document fragment for performance
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
document.querySelector('#list').appendChild(fragment);
```

### Form Handling
```javascript
const form = document.querySelector('#myForm');
const input = document.querySelector('#myInput');

// Get form values
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  
  // Or get individual values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  console.log(name, email);
});

// Input validation
input.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value.length < 3) {
    e.target.setCustomValidity('Must be at least 3 characters');
  } else {
    e.target.setCustomValidity('');
  }
});

// Check form validity
if (form.checkValidity()) {
  console.log('Form is valid');
} else {
  console.log('Form has errors');
}
```

### Common Event Types
```javascript
// Mouse events
element.addEventListener('click', (e) => console.log('Click'));
element.addEventListener('dblclick', (e) => console.log('Double click'));
element.addEventListener('mousedown', (e) => console.log('Mouse down'));
element.addEventListener('mouseup', (e) => console.log('Mouse up'));
element.addEventListener('mouseover', (e) => console.log('Mouse over'));
element.addEventListener('mouseout', (e) => console.log('Mouse out'));

// Keyboard events
document.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
  console.log('Key code:', e.keyCode);
  
  if (e.key === 'Enter') {
    console.log('Enter key pressed');
  }
});

document.addEventListener('keyup', (e) => console.log('Key released'));

// Window events
window.addEventListener('load', () => console.log('Page loaded'));
window.addEventListener('resize', () => console.log('Window resized'));
window.addEventListener('scroll', () => console.log('Page scrolled'));

// Form events
const input = document.querySelector('input');
input.addEventListener('change', (e) => console.log('Value changed'));
input.addEventListener('focus', (e) => console.log('Input focused'));
input.addEventListener('blur', (e) => console.log('Input blurred'));
```

## Verification
1. ตรวจสอบว่าสามารถ select elements ได้
2. ทดสอบ event listeners ทำงานได้
3. ยืนยันว่าสามารถสร้างและจัดการ elements ได้
4. ตรวจสอบ style manipulation ทำงานได้
5. ทดสอบ form handling ทำงานได้
6. ยืนยันว่า event delegation ทำงานได้
