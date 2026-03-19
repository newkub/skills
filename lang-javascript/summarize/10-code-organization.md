---
name: javascript-code-organization-summary
description: สรุป best practices สำหรับ code organization ใน JavaScript
goal: ให้นักพัฒนาจัดระเบียบ JavaScript code ได้อย่างมีประสิทธิภาพ
outcome: สามารถจัดระเบียบ code ให้ maintainable, scalable และ readable
---

# Code Organization Best Practices

## Overview

Best practices สำหรับการจัดระเบียบ JavaScript code ให้ maintainable, scalable และ readable

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use modules | Better code organization | High | `export const utils = { ... }` |
| Follow naming conventions | Consistent code style | Medium | `const getUserById = (id) => ...` |
| Separate concerns | Maintainable code | High | `const api = { ... }; const ui = { ... }` |
| Use proper folder structure | Scalable organization | High | Organize by feature or layer |
| Implement proper imports | Clean dependencies | Medium | `import { func } from './utils'` |
| Use TypeScript when possible | Type safety | Medium | `interface User { id: number; }` |
| Keep files small | Single responsibility | Medium | One main concept per file |
| Use consistent code style | Team collaboration | High | Follow ESLint rules |
| Document complex logic | Better understanding | Medium | JSDoc comments |
| Avoid circular dependencies | Prevent issues | High | Proper dependency graph |

## Implementation Guidelines

### High Priority Practices

1. **Use modules** - Better code organization
2. **Separate concerns** - Maintainable code
3. **Use proper folder structure** - Scalable organization
4. **Follow naming conventions** - Consistent code style
5. **Use consistent code style** - Team collaboration

### Medium Priority Practices

1. **Use TypeScript** - Type safety when beneficial
2. **Keep files small** - Single responsibility
3. **Document complex logic** - Better understanding
4. **Implement proper imports** - Clean dependencies
5. **Avoid circular dependencies** - Prevent issues

### Code Organization Checklist

#### Structure

- [ ] Use ES6 modules
- [ ] Follow naming conventions
- [ ] Separate concerns properly
- [ ] Use proper folder structure
- [ ] Keep related code together

#### Dependencies

- [ ] Import only what's needed
- [ ] Avoid circular dependencies
- [ ] Use proper import paths
- [ ] Group imports logically
- [ ] Use tree-shaking friendly exports

#### Maintainability

- [ ] Keep files focused
- [ ] Use consistent style
- [ ] Document complex logic
- [ ] Follow DRY principle
- [ ] Use meaningful names

## Common Organization Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Feature-based | Large applications | `/features/user/` |
| Layer-based | Traditional architecture | `/services/`, `/controllers/` |
| Domain-driven | Complex business logic | `/domains/user/` |
| Module-based | Library development | `/utils/`, `/helpers/` |

## Code Organization Examples

### Module Structure

```javascript
// Good: Well-organized module
// utils/userUtils.js

/**
 * Validates user data
 * @param {Object} user - User object to validate
 * @returns {boolean} True if valid, false otherwise
 */
export function validateUser(user) {
  if (!user || typeof user !== 'object') {
    return false;
  }

  const requiredFields = ['id', 'name', 'email'];
  return requiredFields.every(field => user[field]);
}

/**
 * Formats user name for display
 * @param {Object} user - User object
 * @returns {string} Formatted name
 */
export function formatUserName(user) {
  if (!user || !user.name) {
    return 'Unknown User';
  }

  return user.name.trim();
}

/**
 * Generates user initials
 * @param {Object} user - User object
 * @returns {string} User initials
 */
export function getUserInitials(user) {
  if (!user || !user.name) {
    return '??';
  }

  return user.name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
}

/**
 * Checks if user is active
 * @param {Object} user - User object
 * @returns {boolean} True if active
 */
export function isUserActive(user) {
  return user && user.status === 'active';
}

// Default export for convenience
export default {
  validateUser,
  formatUserName,
  getUserInitials,
  isUserActive
};
```

### Folder Structure

```javascript
// Good: Feature-based organization
// src/features/user/
// ├── index.js              // Main exports
// ├── components/           // React components
// │   ├── UserList.js
// │   ├── UserCard.js
// │   └── UserForm.js
// ├── services/             // Business logic
// │   ├── userService.js
// │   └── userValidation.js
// ├── utils/                 // Helper functions
// │   ├── userUtils.js
// │   └── formatters.js
// ├── types/                 // TypeScript types
// │   └── user.types.js
// ├── tests/                 // Test files
// │   ├── user.test.js
// │   └── userValidation.test.js
// └── hooks/                 // Custom hooks
//     ├── useUser.js
//     └── useUserList.js

// src/features/user/index.js
export { default as UserList } from './components/UserList';
export { default as UserCard } from './components/UserCard';
export { default as UserForm } from './components/UserForm';
export { userService } from './services/userService';
export { useUser } from './hooks/useUser';
```

### Service Layer Organization

```javascript
// Good: Service layer with proper separation
// src/services/apiService.js
class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new APIError(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
}

class APIError extends Error {
  constructor(message) {
    super(message);
    this.name = 'APIError';
  }
}

export { APIService, APIError };

// src/services/userService.js
import { APIService } from './apiService';

class UserService {
  constructor() {
    this.api = new APIService('https://api.example.com');
  }

  async getUsers() {
    try {
      const users = await this.api.get('/users');
      return users.map(this.mapUserData);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await this.api.get(`/users/${id}`);
      return this.mapUserData(user);
    } catch (error) {
      if (error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const newUser = await this.api.post('/users', userData);
      return this.mapUserData(newUser);
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const updatedUser = await this.api.put(`/users/${id}`, userData);
      return this.mapUserData(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await this.api.delete(`/users/${id}`);
      return true;
    } catch (error) {
      console.error('Failed to delete user:', error);
      throw error;
    }
  }

  mapUserData(apiUser) {
    return {
      id: apiUser.id,
      name: apiUser.name,
      email: apiUser.email,
      avatar: apiUser.avatar || null,
      createdAt: new Date(apiUser.created_at),
      updatedAt: new Date(apiUser.updated_at)
    };
  }
}

export default new UserService();
```

### Utility Functions Organization

```javascript
// Good: Organized utility functions
// src/utils/index.js

// Import all utilities
export * from './arrayUtils';
export * from './objectUtils';
export * from './stringUtils';
export * from './dateUtils';
export * from './validationUtils';

// src/utils/arrayUtils.js
/**
 * Removes duplicates from array
 * @param {Array} array - Input array
 * @returns {Array} Array without duplicates
 */
export function removeDuplicates(array) {
  return [...new Set(array)];
}

/**
 * Groups array items by key
 * @param {Array} array - Input array
 * @param {string} key - Key to group by
 * @returns {Object} Grouped object
 */
export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const group = item[key];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {});
}

/**
 * Sorts array by key
 * @param {Array} array - Input array
 * @param {string} key - Key to sort by
 * @param {string} order - Sort order ('asc' or 'desc')
 * @returns {Array} Sorted array
 */
export function sortBy(array, key, order = 'asc') {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (order === 'desc') {
      return bVal > aVal ? 1 : bVal < aVal ? -1 : 0;
    }

    return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
  });
}

// src/utils/objectUtils.js
/**
 * Deep clones an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}

/**
 * Merges objects deeply
 * @param {Object} target - Target object
 * @param {...Object} sources - Source objects
 * @returns {Object} Merged object
 */
export function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// src/utils/validationUtils.js
/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Validates required fields
 * @param {Object} data - Data to validate
 * @param {Array} requiredFields - Required field names
 * @returns {Object} Validation result
 */
export function validateRequiredFields(data, requiredFields) {
  const missing = [];
  const invalid = [];

  for (const field of requiredFields) {
    if (!data[field]) {
      missing.push(field);
    } else if (typeof data[field] === 'string' && data[field].trim() === '') {
      invalid.push(field);
    }
  }

  return {
    isValid: missing.length === 0 && invalid.length === 0,
    missing,
    invalid
  };
}
```

### Import/Export Best Practices

```javascript
// Good: Clean imports and exports
// src/components/UserCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { formatUserName, getUserInitials } from '../utils/userUtils';
import { useUser } from '../hooks/useUser';
import './UserCard.css';

const UserCard = ({ user, onClick }) => {
  const { updateUser } = useUser();

  const handleClick = () => {
    onClick(user);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <div className="user-avatar">
        {getUserInitials(user)}
      </div>
      <div className="user-info">
        <h3>{formatUserName(user)}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func
};

UserCard.defaultProps = {
  onClick: () => {}
};

export default UserCard;

// Good: Barrel exports for convenience
// src/components/index.js
export { default as UserCard } from './UserCard';
export { default as UserList } from './UserList';
export { default as UserForm } from './UserForm';
export { default as UserAvatar } from './UserAvatar';

// Good: Named exports for utilities
// src/utils/index.js
export {
  validateUser,
  formatUserName,
  getUserInitials,
  isUserActive
} from './userUtils';

export {
  removeDuplicates,
  groupBy,
  sortBy
} from './arrayUtils';

export {
  deepClone,
  deepMerge
} from './objectUtils';
```

### Configuration Management

```javascript
// Good: Environment-based configuration
// src/config/index.js
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

export const config = {
  env: process.env.NODE_ENV || 'development',
  isDevelopment,
  isProduction,
  isTest,

  api: {
    baseURL: process.env.API_BASE_URL || 'https://api.example.com',
    timeout: parseInt(process.env.API_TIMEOUT) || 5000,
    retries: parseInt(process.env.API_RETRIES) || 3
  },

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    name: process.env.DB_NAME || 'app',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL === 'true'
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS) || 12
  },

  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'app.log',
    maxFiles: parseInt(process.env.LOG_MAX_FILES) || 5,
    maxSize: process.env.LOG_MAX_SIZE || '10m'
  }
};

// Validation
function validateConfig() {
  const required = ['JWT_SECRET', 'DB_PASSWORD'];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

if (!isTest) {
  validateConfig();
}
```

## Verification

1. ตรวจสอบว่าใช้ modules อย่างถูกต้อง
2. ทดสอบว่ามี proper folder structure
3. ยืนยันว่ามี consistent naming conventions
4. ตรวจสอบว่ามี separation of concerns
5. ทดสอบว่ามี proper imports/exports
6. ยืนยันว่าไม่มี circular dependencies
7. ตรวจสอบว่ามี consistent code style
8. ทดสอบว่ามี proper documentation
