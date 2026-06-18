# Component Design Principles

## ภาพรวม

หลักการออกแบบ components ใน Svelte

## Single Responsibility

### One Purpose Per Component

```svelte
<!-- ✅ Good - Single responsibility -->
<!-- UserProfile.svelte - แสดง user profile เท่านั้น -->
<script>
  export let user;
</script>

<div class="profile">
  <img src={user.avatar} alt={user.name} />
  <h2>{user.name}</h2>
  <p>{user.bio}</p>
</div>

<!-- ❌ Bad - Multiple responsibilities -->
<!-- UserProfile.svelte - แสดง profile + edit + delete -->
<script>
  export let user;
  
  function editUser() { /* edit logic */ }
  function deleteUser() { /* delete logic */ }
</script>
```

## Composition Over Inheritance

### Compose Small Components

```svelte
<!-- ✅ Good - Composed -->
<Card>
  <Header>
    <Avatar {user} />
  </Header>
  <Content>
    <UserInfo {user} />
  </Content>
  <Footer>
    <Actions {user} />
  </Footer>
</Card>

<!-- ❌ Bad - Monolithic -->
<UserProfile {user} />
```

## Props Interface

### Define Props Clearly

```svelte
<script lang="ts">
  export interface Props {
    user: User;
    onEdit?: (user: User) => void;
    onDelete?: (user: User) => void;
    variant?: 'card' | 'list';
  }
  
  export let user: Props['user'];
  export let onEdit: Props['onEdit'];
  export let onDelete: Props['onDelete'];
  export let variant: Props['variant'] = 'card';
</script>
```

## Slot-based Design

### Flexible Composition

```svelte
<!-- ✅ Good - Slot-based -->
<Modal>
  <slot name="header" />
  <slot />
  <slot name="footer" />
</Modal>

<!-- ❌ Bad - Hardcoded -->
<Modal>
  <div class="header">Fixed Header</div>
  <div class="content">Fixed Content</div>
  <div class="footer">Fixed Footer</div>
</Modal>
```

## Stateless vs Stateful

### Prefer Stateless Components

```svelte
<!-- ✅ Good - Stateless -->
<script>
  export let value;
  export let onChange;
</script>

<input {value} on:input={onChange} />

<!-- ❌ Bad - Stateful -->
<script>
  let value = '';
</script>

<input bind:value={value} />
```

## Reusability

### Generic Components

```svelte
<!-- ✅ Good - Generic -->
<script>
  export let items;
  export let renderItem;
</script>

{#each items as item}
  {@html renderItem(item)}
{/each}

<!-- ❌ Bad - Specific -->
<script>
  export let users;
</script>

{#each users as user}
  <UserCard {user} />
{/each}
```

## Accessibility

### Accessible by Default

```svelte
<!-- ✅ Good - Accessible -->
<button 
  aria-label="Close modal" 
  on:click={close}
>
  ×
</button>

<!-- ❌ Bad - Not accessible -->
<div on:click={close}>×</div>
```

## Summary

Component design principles:
- Single responsibility
- Composition over inheritance
- Clear props interface
- Slot-based design
- Prefer stateless
- Generic and reusable
- Accessible by default
