# JavaScript Project Templates

## เทมเพลตโปรเจกต์ JavaScript ที่ใช้งานได้จริง

### 1. Basic Node.js Express App

```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon jest supertest
```

**package.json**
```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

**src/index.js**
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2. React SPA with Vite

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm install axios react-router-dom
```

**src/App.jsx**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
```

**src/components/Navbar.jsx**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">My App</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

### 3. Vue.js App with Composition API

```bash
npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm install axios vue-router
```

**src/App.vue**
```vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
```

### 4. CLI Tool with Commander.js

```bash
mkdir my-cli-tool
cd my-cli-tool
npm init -y
npm install commander inquirer chalk
npm install -D jest
```

**bin/cli.js**
```javascript
#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { createProject } = require('../src/commands/create');

const program = new Command();

program
  .name('my-cli')
  .description('CLI tool for project management')
  .version('1.0.0');

program
  .command('create <project-name>')
  .description('Create a new project')
  .option('-t, --template <template>', 'Project template', 'default')
  .action(async (projectName, options) => {
    try {
      await createProject(projectName, options);
      console.log(chalk.green(`✅ Project ${projectName} created successfully!`));
    } catch (error) {
      console.error(chalk.red('❌ Error creating project:'), error.message);
    }
  });

program
  .command('init')
  .description('Initialize project interactively')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        validate: input => input.trim() !== '' || 'Project name is required'
      },
      {
        type: 'list',
        name: 'template',
        message: 'Choose template:',
        choices: ['react', 'vue', 'express', 'default']
      }
    ]);

    try {
      await createProject(answers.projectName, { template: answers.template });
      console.log(chalk.green(`✅ Project ${answers.projectName} created!`));
    } catch (error) {
      console.error(chalk.red('❌ Error:'), error.message);
    }
  });

program.parse();
```

### 5. Library Package

```bash
mkdir my-library
cd my-library
npm init -y
npm install -D rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-terser jest
```

**src/index.js**
```javascript
/**
 * My Library - A collection of utility functions
 * @version 1.0.0
 */

/**
 * Formats a number with commas
 * @param {number} num - The number to format
 * @returns {string} The formatted number
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} The debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Deep clones an object
 * @param {Object} obj - The object to clone
 * @returns {Object} The cloned object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

export default {
  formatNumber,
  debounce,
  deepClone
};
```

**rollup.config.js**
```javascript
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  // UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/my-library.umd.js',
      format: 'umd',
      name: 'MyLibrary'
    },
    plugins: [nodeResolve()]
  },
  // ES Module build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/my-library.esm.js',
      format: 'es'
    },
    plugins: [nodeResolve()]
  },
  // Minified build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/my-library.min.js',
      format: 'umd',
      name: 'MyLibrary'
    },
    plugins: [nodeResolve(), terser()]
  }
];
```

### 6. Full-Stack App (Express + React)

**Backend Structure**
```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
├── package.json
└── .env
```

**Frontend Structure**
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   └── App.jsx
├── public/
└── package.json
```

**Root package.json**
```json
{
  "name": "fullstack-app",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
    "dev:backend": "cd backend && npm run dev",
    "dev:frontend": "cd frontend && npm run dev",
    "build": "npm run build:backend && npm run build:frontend",
    "build:backend": "cd backend && npm run build",
    "build:frontend": "cd frontend && npm run build"
  },
  "devDependencies": {
    "concurrently": "^7.6.0"
  }
}
```

### Common Configuration Files

**.gitignore**
```
node_modules/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
dist/
build/
coverage/
*.log
.DS_Store
```

**.eslintrc.js**
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error'
  }
};
```

**.prettierrc**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

These templates provide solid foundations for different types of JavaScript projects and can be customized based on specific requirements.
