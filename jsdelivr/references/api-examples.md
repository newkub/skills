# jsDelivr API Examples

ตัวอย่างการใช้งาน jsDelivr API ในสถานการณ์ต่างๆ

## 1. Basic CDN Usage Examples

### Loading Popular Libraries

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jsDelivr Examples</title>

  <!-- Vue 3 -->
  <script src="https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.global.js"></script>

  <!-- React 18 -->
  <script src="https://cdn.jsdelivr.net/bun/react@18/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/bun/react-dom@18/umd/react-dom.development.js"></script>

  <!-- jQuery -->
  <script src="https://cdn.jsdelivr.net/bun/jquery@3.7.1/dist/jquery.min.js"></script>

  <!-- Axios -->
  <script src="https://cdn.jsdelivr.net/bun/axios@1.6.2/dist/axios.min.js"></script>

  <!-- Lodash -->
  <script src="https://cdn.jsdelivr.net/bun/lodash@4.17.21/lodash.min.js"></script>

  <!-- CSS Frameworks -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/bun/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/bulma@0.9.4/css/bulma.min.css">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body>
  <div class="container mt-4">
    <h1>jsDelivr Libraries Loaded</h1>
    <ul id="libs"></ul>
  </div>

  <script>
    const libs = [];

    if (typeof Vue !== 'undefined') libs.push(`Vue ${Vue.version}`);
    if (typeof React !== 'undefined') libs.push(`React ${React.version}`);
    if (typeof jQuery !== 'undefined') libs.push(`jQuery ${jQuery.fn.jquery}`);
    if (typeof axios !== 'undefined') libs.push(`Axios ${axios.VERSION}`);
    if (typeof _ !== 'undefined') libs.push(`Lodash ${_.VERSION}`);

    document.getElementById('libs').innerHTML = libs
      .map(lib => `<li>${lib}</li>`)
      .join('');
  </script>
</body>
</html>
```

### Alpine.js Application

```html
<!DOCTYPE html>
<html>
<head>
  <script defer src="https://cdn.jsdelivr.net/bun/alpinejs@3.13.3/dist/cdn.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/water.css@2/out/water.css">
</head>
<body>
  <div x-data="{ 
    count: 0,
    items: ['Apple', 'Banana', 'Cherry'],
    newItem: ''
  }">
    <h1 x-text="`Count: ${count}`"></h1>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>

    <h2>Shopping List</h2>
    <input x-model="newItem" @keyup.enter="items.push(newItem); newItem = ''" placeholder="New item">
    <button @click="items.push(newItem); newItem = ''">Add</button>

    <ul>
      <template x-for="(item, index) in items" :key="index">
        <li>
          <span x-text="item"></span>
          <button @click="items.splice(index, 1)">Remove</button>
        </li>
      </template>
    </ul>
  </div>
</body>
</html>
```

## 2. ES Modules Examples

### Vue 3 Composition API with esm.run

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/water.css@2/out/water.css">
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">Reset</button>
  </div>

  <script type="module">
    import { createApp, ref, computed } from 'https://esm.run/vue@3';

    createApp({
      setup() {
        const counter = ref(0);
        const message = computed(() => 
          counter.value > 0 ? 'Positive!' : 
          counter.value < 0 ? 'Negative!' : 
          'Zero!'
        );

        const increment = () => counter.value++;
        const decrement = () => counter.value--;
        const reset = () => counter.value = 0;

        return { message, counter, increment, decrement, reset };
      }
    }).mount('#app');
  </script>
</body>
</html>
```

### React without Build Tools

```html
<!DOCTYPE html>
<html>
<head>
  <script crossorigin src="https://cdn.jsdelivr.net/bun/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://cdn.jsdelivr.net/bun/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/bun/@babel/standalone@7/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Counter />);
  </script>
</body>
</html>
```

### Preact with HTM

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/water.css@2/out/water.css">
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import { h, render } from 'https://esm.run/preact';
    import { useState, useEffect } from 'https://esm.run/preact/hooks';
    import htm from 'https://esm.run/htm';

    const html = htm.bind(h);

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { text: input, done: false }]);
        setInput('');
      };

      return html`
        <div>
          <h1>Todo List</h1>
          <form onSubmit=${addTodo}>
            <input 
              value=${input} 
              onInput=${e => setInput(e.target.value)}
              placeholder="New todo"
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            ${todos.map((todo, i) => html`
              <li key=${i}>
                <label>
                  <input 
                    type="checkbox" 
                    checked=${todo.done}
                    onChange=${() => {
                      const newTodos = [...todos];
                      newTodos[i].done = !newTodos[i].done;
                      setTodos(newTodos);
                    }}
                  />
                  <span style=${{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                    ${todo.text}
                  </span>
                </label>
              </li>
            `)}
          </ul>
        </div>
      `;
    }

    render(html`<${App} />`, document.getElementById('app'));
  </script>
</body>
</html>
```

## 3. Data API Examples

### Fetch Package Versions

```javascript
// Get all available versions of a package
async function getPackageVersions(packageName) {
  const response = await fetch(
    `https://data.jsdelivr.com/v1/package/bun/${packageName}`
  );

  if (!response.ok) {
    throw new Error(`Package ${packageName} not found`);
  }

  const data = await response.json();

  return {
    name: data.name,
    versions: data.versions,
    latest: data.tags?.latest,
    tags: data.tags
  };
}

// Usage
getPackageVersions('vue')
  .then(info => {
    console.log('Latest:', info.latest);
    console.log('All versions:', info.versions.slice(0, 10));
  })
  .catch(console.error);
```

### Get Package Files

```javascript
// Get all files in a specific version
async function getPackageFiles(packageName, version) {
  const response = await fetch(
    `https://data.jsdelivr.com/v1/package/bun/${packageName}@${version}`
  );

  if (!response.ok) {
    throw new Error(`Version ${version} not found`);
  }

  const data = await response.json();

  return {
    default: data.default,
    files: data.files.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      hash: file.hash
    }))
  };
}

// Usage
getPackageFiles('vue', '3.4.21')
  .then(info => {
    console.log('Entry point:', info.default);
    console.log('Files:', info.files.filter(f => f.type === 'file'));
  })
  .catch(console.error);
```

### Resolve Entry Point

```javascript
// Get the resolved CDN URL for a package
async function resolvePackageEntry(packageName, version) {
  const response = await fetch(
    `https://data.jsdelivr.com/v1/package/resolve/bun/${packageName}@${version}`
  );

  if (!response.ok) {
    throw new Error(`Cannot resolve ${packageName}@${version}`);
  }

  const data = await response.json();

  return {
    entry: data.entry,
    url: data.url
  };
}

// Usage
resolvePackageEntry('vue', '3.4.21')
  .then(result => {
    console.log('Load from:', result.url);
  })
  .catch(console.error);
```

### Package Usage Stats

```javascript
// Get download stats for a package
async function getPackageStats(packageName) {
  const response = await fetch(
    `https://data.jsdelivr.com/v1/stats/packages/bun/${packageName}`
  );

  if (!response.ok) {
    throw new Error(`Stats not available for ${packageName}`);
  }

  const data = await response.json();

  return {
    total: data.total,
    versions: data.versions,
    dailyStats: data.dates
  };
}

// Usage
getPackageStats('react')
  .then(stats => {
    console.log('Total downloads:', stats.total.toLocaleString());
    console.log('Top version:', Object.entries(stats.versions)
      .sort((a, b) => b[1] - a[1])[0]
    );
  })
  .catch(console.error);
```

### Search Package Files

```javascript
// Find specific file types in a package
async function findFiles(packageName, version, extension) {
  const data = await getPackageFiles(packageName, version);

  return data.files.filter(file => 
    file.name.endsWith(extension)
  );
}

// Usage
findFiles('vue', '3.4.21', '.js')
  .then(jsFiles => {
    console.log('JS files:', jsFiles.map(f => f.name));
  });

findFiles('bootstrap', '5.3.2', '.css')
  .then(cssFiles => {
    console.log('CSS files:', cssFiles.map(f => f.name));
  });
```

## 4. File Combining Examples

### Combine Multiple Libraries

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Combine Vue, Lodash, and Axios -->
  <script src="https://cdn.jsdelivr.net/combine/bun/vue@3/dist/vue.global.js,bun/lodash@4/lodash.min.js,bun/axios@1/dist/axios.min.js"></script>

  <!-- Combine CSS files -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/bun/bootstrap@5/dist/css/bootstrap.min.css,bun/@fortawesome/fontawesome-free@6/css/all.min.css">
</head>
<body>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>

  <script>
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          title: 'Users',
          users: []
        };
      },
      async mounted() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = _.sortBy(response.data, 'name');
      }
    }).mount('#app');
  </script>
</body>
</html>
```

## 5. HTMX Examples

### Basic HTMX with jsDelivr

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/bun/htmx.org@1.9.10/dist/htmx.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/water.css@2/out/water.css">
</head>
<body>
  <h1>HTMX Demo</h1>

  <!-- Load content on click -->
  <button hx-get="https://jsonplaceholder.typicode.com/posts/1"
          hx-target="#result"
          hx-swap="innerHTML">
    Load Post
  </button>

  <div id="result"></div>

  <!-- Form submission -->
  <form hx-post="/api/submit" hx-target="#response">
    <input type="text" name="name" placeholder="Name" required>
    <button type="submit">Submit</button>
  </form>

  <div id="response"></div>

  <!-- Polling -->
  <div hx-get="/api/status" hx-trigger="every 5s">
    Loading status...
  </div>
</body>
</html>
```

## 6. Animation Libraries

### Anime.js Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: #3498db;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <button id="animate">Animate All</button>
  <button id="stagger">Stagger Animation</button>

  <script type="module">
    import anime from 'https://esm.run/animejs';

    document.getElementById('animate').addEventListener('click', () => {
      anime({
        targets: '.box',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#e74c3c',
        duration: 800,
        direction: 'alternate'
      });
    });

    document.getElementById('stagger').addEventListener('click', () => {
      anime({
        targets: '.box',
        translateX: 250,
        delay: anime.stagger(100),
        backgroundColor: '#2ecc71',
        easing: 'easeInOutQuad'
      });
    });
  </script>
</body>
</html>
```

## 7. Chart.js Examples

### Basic Chart

```html
<!DOCTYPE html>
<html>
<head>
  <title>Chart.js Demo</title>
</head>
<body>
  <canvas id="myChart"></canvas>

  <script type="module">
    import { Chart } from 'https://esm.run/chart.js/auto';

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  </script>
</body>
</html>
```

## 8. Icon Libraries

### Font Awesome

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/@fortawesome/fontawesome-free@6.5.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
  <div class="section">
    <div class="container">
      <h1 class="title">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        Icons Demo
      </h1>

      <div class="buttons">
        <button class="button is-primary">
          <span class="icon">
            <i class="fas fa-save"></i>
          </span>
          <span>Save</span>
        </button>

        <button class="button is-danger">
          <span class="icon">
            <i class="fas fa-trash"></i>
          </span>
          <span>Delete</span>
        </button>

        <button class="button is-info">
          <span class="icon">
            <i class="fas fa-info-circle"></i>
          </span>
          <span>Info</span>
        </button>
      </div>
    </div>
  </div>
</body>
</html>
```

## 9. Validation Utilities

### URL Validator

```javascript
// ตรวจสอบว่า jsDelivr URL ถูกต้อง
function validateJsdelivrUrl(url) {
  const patterns = {
    bun: /^https:\/\/cdn\.jsdelivr\.net\/bun\/([^@]+)(?:@([^/]+))?(?:\/(.+))?$/,
    gh: /^https:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^@]+)(?:@([^/]+))?(?:\/(.+))?$/,
    esm: /^https:\/\/esm\.run\/([^@]+)(?:@(.+))?$/,
    combine: /^https:\/\/cdn\.jsdelivr\.net\/combine\/(.+)$/
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    const match = url.match(pattern);
    if (match) {
      return { valid: true, type, match };
    }
  }

  return { valid: false };
}

// Usage
console.log(validateJsdelivrUrl('https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.global.js'));
// { valid: true, type: 'bun', match: [...] }
```

## 10. Complete Application Example

### Todo App with Vue 3 + Bulma

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Todo App - jsDelivr Demo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bun/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
  <section class="section" id="app">
    <div class="container">
      <h1 class="title">📝 Todo List</h1>

      <div class="field has-addons">
        <div class="control is-expanded">
          <input 
            class="input" 
            v-model="newTodo" 
            @keyup.enter="addTodo"
            placeholder="What needs to be done?"
          >
        </div>
        <div class="control">
          <button class="button is-primary" @click="addTodo">
            Add
          </button>
        </div>
      </div>

      <div class="tabs is-toggle is-small">
        <ul>
          <li :class="{ 'is-active': filter === 'all' }">
            <a @click="filter = 'all'">
              All ({{ allCount }})
            </a>
          </li>
          <li :class="{ 'is-active': filter === 'active' }">
            <a @click="filter = 'active'">
              Active ({{ activeCount }})
            </a>
          </li>
          <li :class="{ 'is-active': filter === 'completed' }">
            <a @click="filter = 'completed'">
              Completed ({{ completedCount }})
            </a>
          </li>
        </ul>
      </div>

      <div class="list">
        <div 
          v-for="todo in filteredTodos" 
          :key="todo.id"
          class="list-item"
        >
          <div class="level is-mobile">
            <div class="level-left">
              <label class="checkbox level-item">
                <input 
                  type="checkbox" 
                  v-model="todo.done"
                >
                <span 
                  class="ml-2"
                  :class="{ 'has-text-grey-light': todo.done, 'is-strikethrough': todo.done }"
                >
                  {{ todo.text }}
                </span>
              </label>
            </div>
            <div class="level-right">
              <button 
                class="button is-small is-danger is-outlined"
                @click="removeTodo(todo.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="todos.length > 0" class="mt-4">
        <button 
          class="button is-small is-warning"
          @click="clearCompleted"
          v-if="completedCount > 0"
        >
          Clear Completed ({{ completedCount }})
        </button>
      </div>

      <div v-else class="notification is-info is-light">
        No todos yet! Add one above.
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/bun/vue@3/dist/vue.global.js"></script>
  <script>
    const { createApp, ref, computed } = Vue;

    createApp({
      setup() {
        const newTodo = ref('');
        const todos = ref([
          { id: 1, text: 'Learn Vue 3', done: true },
          { id: 2, text: 'Build a todo app', done: false },
          { id: 3, text: 'Master jsDelivr', done: false }
        ]);
        const filter = ref('all');
        let nextId = 4;

        const filteredTodos = computed(() => {
          switch (filter.value) {
            case 'active':
              return todos.value.filter(t => !t.done);
            case 'completed':
              return todos.value.filter(t => t.done);
            default:
              return todos.value;
          }
        });

        const allCount = computed(() => todos.value.length);
        const activeCount = computed(() => todos.value.filter(t => !t.done).length);
        const completedCount = computed(() => todos.value.filter(t => t.done).length);

        const addTodo = () => {
          const text = newTodo.value.trim();
          if (!text) return;

          todos.value.push({
            id: nextId++,
            text,
            done: false
          });
          newTodo.value = '';
        };

        const removeTodo = (id) => {
          todos.value = todos.value.filter(t => t.id !== id);
        };

        const clearCompleted = () => {
          todos.value = todos.value.filter(t => !t.done);
        };

        return {
          newTodo,
          todos,
          filter,
          filteredTodos,
          allCount,
          activeCount,
          completedCount,
          addTodo,
          removeTodo,
          clearCompleted
        };
      }
    }).mount('#app');
  </script>
</body>
</html>
```

## สรุป

ตัวอย่างเหล่านี้แสดงให้เห็นว่า jsDelivr สามารถใช้งานได้หลากหลาย:

- ✅ โหลด libraries ยอดนิยมได้ทันที
- ✅ ใช้ ES Modules บน browser โดยตรง
- ✅ สร้าง full applications โดยไม่ต้อง build tools
- ✅ ดึงข้อมูล package metadata ผ่าน Data API
- ✅ รวมหลายไฟล์เป็น request เดียว
- ✅ ใช้กับ frameworks และ libraries ต่างๆ
