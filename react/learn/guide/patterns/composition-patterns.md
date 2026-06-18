# Composition Patterns

## ภาพรวม

Design patterns สำหรับ component composition ใน React

## 1. Compound Components

สร้าง components ที่ work ร่วมกัน

```javascript
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div>{children}</div>;
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      onClick={() => setActiveTab(index)}
      style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div>{children}</div>;
}

function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== index) return null;
  return <div>{children}</div>;
}

// Usage
<Tabs>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

## 2. Slot Pattern

ใช้ slots สำหรับ flexible composition

```javascript
function Card({ header, body, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{body}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Usage
<Card
  header={<h2>Title</h2>}
  body={<p>Content</p>}
  footer={<button>Action</button>}
/>
```

## สรุป

Composition patterns ช่วยให้:
- Components มีความ flexible และ reusable
- Clear component hierarchy
- Easy to customize และ extend
