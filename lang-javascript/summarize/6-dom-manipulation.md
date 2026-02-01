---
name: javascript-dom-manipulation-summary
description: สรุป best practices สำหรับ DOM manipulation ใน JavaScript
goal: ให้นักพัฒนาจัดการ DOM elements ได้อย่างมีประสิทธิภาพ
outcome: สามารถจัดการ DOM และ events ได้อย่าง optimized และ maintainable
---

# DOM Manipulation Best Practices

## Overview
Best practices สำหรับการจัดการ DOM elements, events, และ performance optimization ใน JavaScript

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use querySelector/querySelectorAll | Modern element selection | High | `document.querySelector('.class')` |
| Use event delegation | Better performance for dynamic content | Medium | `parent.addEventListener('click', handler)` |
| Use classList over className | Better class management | High | `element.classList.add('active')` |
| Avoid inline styles | Use CSS classes | Medium | `element.className = 'highlight'` |
| Minimize DOM manipulation | Batch DOM updates | High | Use document fragments |
| Use requestAnimationFrame | Smooth animations | Medium | `requestAnimationFrame(updateAnimation)` |
| Remove event listeners | Prevent memory leaks | High | `element.removeEventListener('click', handler)` |
| Use data attributes | Store element-specific data | Medium | `element.dataset.userId = '123'` |
| Avoid layout thrashing | Batch reads and writes | High | Separate read/write operations |
| Use modern APIs | Use newer DOM APIs when available | Medium | `element.closest('.parent')` |

## Implementation Guidelines

### High Priority Practices
1. **Use modern selectors** - querySelector/querySelectorAll
2. **Minimize DOM manipulation** - Batch updates
3. **Use event delegation** - Better performance
4. **Remove event listeners** - Prevent memory leaks
5. **Avoid layout thrashing** - Separate reads and writes

### Medium Priority Practices
1. **Use classList** - Better class management
2. **Use requestAnimationFrame** - Smooth animations
3. **Use data attributes** - Store element data
4. **Use modern APIs** - Newer DOM methods

### DOM Manipulation Checklist

#### Performance
- [ ] Minimize DOM operations
- [ ] Batch DOM updates
- [ ] Avoid layout thrashing
- [ ] Use event delegation
- [ ] Remove unused event listeners

#### Maintainability
- [ ] Use meaningful selectors
- [ ] Separate concerns (HTML/CSS/JS)
- [ ] Use CSS classes instead of inline styles
- [ ] Use data attributes for element data

#### Best Practices
- [ ] Use modern DOM APIs
- [ ] Implement proper cleanup
- [ ] Handle edge cases
- [ ] Test across browsers

## Common DOM Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Element selection | Find elements in DOM | `document.querySelector('#id')` |
| Event delegation | Handle events on dynamic content | `parent.addEventListener('click', handler)` |
| DOM batching | Multiple DOM updates | `documentFragment` |
| Animation | Smooth visual changes | `requestAnimationFrame` |
| Cleanup | Remove event listeners | `element.removeEventListener()` |

## DOM Manipulation Examples

### Modern Element Selection
```javascript
// Good: Modern selectors
const button = document.querySelector('#submitBtn');
const containers = document.querySelectorAll('.container');
const activeButton = document.querySelector('button.active');
const nestedItem = document.querySelector('.menu .item');
const dataElements = document.querySelectorAll('[data-id]');

// Bad: Legacy selectors
const button = document.getElementById('submitBtn');
const containers = document.getElementsByClassName('container');
const buttons = document.getElementsByTagName('button');

// Good: Complex selectors with modern methods
const specificElement = document.querySelector('.parent .child[data-type="primary"]');
const allElements = document.querySelectorAll('div.container > p.highlight');

// Good: Element existence check
const element = document.querySelector('.maybe-exists');
if (element) {
  // Safe to use element
  element.classList.add('found');
}
```

### Event Delegation
```javascript
// Good: Event delegation for dynamic content
const list = document.querySelector('#dynamic-list');

list.addEventListener('click', (event) => {
  const listItem = event.target.closest('li');
  if (listItem) {
    handleListItemClick(listItem);
  }
});

function handleListItemClick(item) {
  const itemId = item.dataset.id;
  const action = event.target.dataset.action;
  
  switch (action) {
    case 'edit':
      editItem(itemId);
      break;
    case 'delete':
      deleteItem(itemId);
      break;
    default:
      selectItem(itemId);
  }
}

// Good: Delegation with multiple event types
const table = document.querySelector('#data-table');

table.addEventListener('click', (event) => {
  if (event.target.matches('.edit-btn')) {
    editRow(event.target.closest('tr'));
  } else if (event.target.matches('.delete-btn')) {
    deleteRow(event.target.closest('tr'));
  }
});

table.addEventListener('change', (event) => {
  if (event.target.matches('.checkbox')) {
    toggleRowSelection(event.target.closest('tr'));
  }
});
```

### Efficient DOM Updates
```javascript
// Good: Batch DOM updates with document fragment
function addMultipleItems(items) {
  const fragment = document.createDocumentFragment();
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = item.name;
    li.dataset.id = item.id;
    
    fragment.appendChild(li);
  });
  
  document.querySelector('#item-list').appendChild(fragment);
}

// Good: Batch class updates
function updateMultipleClasses(elements, classesToAdd, classesToRemove) {
  elements.forEach(element => {
    element.classList.add(...classesToAdd);
    element.classList.remove(...classesToRemove);
  });
}

// Bad: Multiple individual DOM updates
function addMultipleItemsBad(items) {
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = item.name;
    li.dataset.id = item.id;
    
    document.querySelector('#item-list').appendChild(li); // Multiple reflows
  });
}
```

### Avoiding Layout Thrashing
```javascript
// Good: Separate reads and writes
function updateElementPositions(elements) {
  // Read all layout information first
  const positions = elements.map(element => ({
    element,
    rect: element.getBoundingClientRect()
  }));
  
  // Then write all layout changes
  positions.forEach(({ element, rect }) => {
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
  });
}

// Good: Use requestAnimationFrame for animations
function animateElement(element, from, to, duration) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = from + (to - from) * progress;
    element.style.transform = `translateX(${current}px)`;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Bad: Intermixed reads and writes (layout thrashing)
function updateElementPositionsBad(elements) {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect(); // Read
    element.style.left = `${rect.left}px`; // Write
    element.style.top = `${rect.top}px`; // Write
  });
}
```

### Class Management
```javascript
// Good: Using classList
function toggleElementState(element, isActive) {
  if (isActive) {
    element.classList.add('active', 'visible');
    element.classList.remove('inactive', 'hidden');
  } else {
    element.classList.add('inactive', 'hidden');
    element.classList.remove('active', 'visible');
  }
}

// Good: Check class existence
function hasRequiredClasses(element) {
  return element.classList.contains('required') && 
         element.classList.contains('validated');
}

// Good: Replace class
element.classList.replace('old-class', 'new-class');

// Good: Toggle class with condition
element.classList.toggle('active', shouldActivate);

// Bad: Using className (string manipulation)
element.className = isActive ? 'active visible' : 'inactive hidden';
```

### Data Attributes
```javascript
// Good: Using data attributes for element data
function setupInteractiveElements() {
  const buttons = document.querySelectorAll('[data-action]');
  
  buttons.forEach(button => {
    const action = button.dataset.action;
    const targetId = button.dataset.target;
    const params = JSON.parse(button.dataset.params || '{}');
    
    button.addEventListener('click', () => {
      handleAction(action, targetId, params);
    });
  });
}

function handleAction(action, targetId, params) {
  const target = document.getElementById(targetId);
  
  switch (action) {
    case 'show':
      target.classList.remove('hidden');
      break;
    case 'hide':
      target.classList.add('hidden');
      break;
    case 'toggle':
      target.classList.toggle('hidden');
      break;
    case 'update':
      Object.assign(target.dataset, params);
      break;
  }
}

// HTML example:
// <button data-action="show" data-target="modal">Show Modal</button>
// <button data-action="update" data-target="user-123" data-params='{"name":"John"}'>Update</button>
```

### Modern DOM APIs
```javascript
// Good: Using modern DOM APIs
function findNearestParent(element, selector) {
  return element.closest(selector);
}

function findPreviousSibling(element, selector) {
  return element.previousElementSibling?.matches(selector) 
    ? element.previousElementSibling 
    : null;
}

function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(
    newElement, 
    referenceElement.nextSibling
  );
}

// Good: Using Intersection Observer for lazy loading
function setupLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Good: Using MutationObserver for DOM changes
function observeContainerChanges(container, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            callback(node);
          }
        });
      }
    });
  });
  
  observer.observe(container, {
    childList: true,
    subtree: true
  });
  
  return observer;
}
```

### Memory Management and Cleanup
```javascript
// Good: Proper event listener cleanup
class ComponentManager {
  constructor() {
    this.eventListeners = new Map();
    this.observers = [];
  }
  
  addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
    
    const key = `${element.id || 'unnamed'}-${event}`;
    this.eventListeners.set(key, { element, event, handler });
  }
  
  addIntersectionObserver(target, callback) {
    const observer = new IntersectionObserver(callback);
    observer.observe(target);
    this.observers.push(observer);
  }
  
  cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners.clear();
    
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Usage
const manager = new ComponentManager();
manager.addEventListener(button, 'click', handleClick);
manager.addIntersectionObserver(image, handleImageLoad);

// Cleanup when component is destroyed
// manager.cleanup();
```

## Performance Optimization

### Efficient DOM Queries
```javascript
// Good: Cache frequently used elements
class DOMCache {
  constructor() {
    this.cache = new Map();
  }
  
  get(selector) {
    if (!this.cache.has(selector)) {
      const element = document.querySelector(selector);
      this.cache.set(selector, element);
    }
    return this.cache.get(selector);
  }
  
  getAll(selector) {
    if (!this.cache.has(selector)) {
      const elements = document.querySelectorAll(selector);
      this.cache.set(selector, elements);
    }
    return this.cache.get(selector);
  }
  
  invalidate(selector) {
    this.cache.delete(selector);
  }
}

const domCache = new DOMCache();
const header = domCache.get('header');
const allButtons = domCache.getAll('button');
```

## Verification
1. ตรวจสอบว่าใช้ querySelector/querySelectorAll
2. ทดสอบว่ามี event delegation สำหรับ dynamic content
3. ยืนยันว่า DOM operations ถูก batch
4. ตรวจสอบว่าไม่มี layout thrashing
5. ทดสอบว่ามี proper cleanup ของ event listeners
6. ยืนยันว่าใช้ classList แทน className
7. ตรวจสอบว่าใช้ modern DOM APIs
8. ทดสอบว่ามี memory management ที่เหมาะสม
