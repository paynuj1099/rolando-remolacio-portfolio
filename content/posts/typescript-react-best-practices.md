---
title: "TypeScript Best Practices for React Developers"
date: "2025-11-15"
excerpt: "Discover essential TypeScript patterns and best practices for building type-safe React applications. Learn about proper typing, generics, utility types, and common pitfalls to avoid."
coverImage: "/images/blog/typescript-guide.png"
author: "Rolando Remolacio"
readTime: "10 min read"
---

I used to write all my React code in plain JavaScript. Then I tried TypeScript and... wow, I can't go back. Yeah, there's a learning curve, but catching bugs before they happen is worth it. Let me share what I've learned.
<br><br>

## Why I Use TypeScript with React

Here's what sold me on TypeScript:

- **Catch bugs early**: Find errors while you're coding, not when users are clicking around
- **Amazing autocomplete**: Your editor knows what props a component needs
- **Living documentation**: The types tell you what each function expects
- **Safe refactoring**: Change something and TypeScript tells you what broke
- **Team friendly**: Everyone knows exactly what data they're working with
<br><br>

## How to Type Your Components
<br><br>

### Basic Components

Here's how I type most of my components:
<br><br>

```typescript
// Good: Using React.FC is optional in modern TypeScript
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export default function Button({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  )
}
```
<br><br>

### Components with Children

When your component wraps other content:
<br><br>

```typescript
interface CardProps {
  title: string
  children: React.ReactNode // For any valid React children
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

// For render props
interface RenderPropProps<T> {
  data: T[]
  render: (item: T) => React.ReactNode
}

function List<T>({ data, render }: RenderPropProps<T>) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}
```
<br><br>

## Typing Events

Different elements need different event types:
<br><br>

```typescript
// Form events
function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // Handle input change
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username"
        onChange={handleChange}
      />
    </form>
  )
}

// Click events
function Button() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked', event.currentTarget)
  }

  return <button onClick={handleClick}>Click me</button>
}

// Keyboard events
function SearchInput() {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Handle enter key
    }
  }

  return <input onKeyDown={handleKeyDown} />
}
```
<br><br>

## Typing React Hooks
<br><br>

### useState
<br><br>

```typescript
// Simple types
const [count, setCount] = useState<number>(0)
const [name, setName] = useState<string>('')

// Complex types
interface User {
  id: number
  name: string
  email: string
}

const [user, setUser] = useState<User | null>(null)

// Array types
const [items, setItems] = useState<string[]>([])

// Object types
interface FormData {
  username: string
  email: string
  age: number
}

const [formData, setFormData] = useState<FormData>({
  username: '',
  email: '',
  age: 0,
})
```
<br><br>

### useRef
<br><br>

```typescript
// DOM element refs
function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} />
}

// Mutable values
function Timer() {
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      console.log('Tick')
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return <div>Timer Component</div>
}
```
<br><br>

### useReducer
<br><br>

```typescript
// Define state and action types
interface State {
  count: number
  error: string | null
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'RESET' }

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'RESET':
      return { count: 0, error: null }
    default:
      return state
  }
}

// Usage
function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}
```
<br><br>

### Custom Hooks
<br><br>

```typescript
// Making your own hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')
  return <div>Current theme: {theme}</div>
}
```
<br><br>

## Fetching Data from APIs
<br><br>

### Typing Your API Responses
<br><br>

```typescript
// Define API response types
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

interface User {
  id: number
  name: string
  email: string
}

// Generic fetch function
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  return await response.json()
}

// Usage
async function getUser(id: number): Promise<User> {
  const response = await fetchData<User>(`/api/users/${id}`)
  return response.data
}

// With React Query
import { useQuery } from '@tanstack/react-query'

function UserProfile({ userId }: { userId: number }) {
  const { data, isLoading, error } = useQuery<User, Error>({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return <div>Welcome, {data?.name}</div>
}
```
<br><br>

## Useful TypeScript Helpers

TypeScript has some built-in helpers that are super useful:
<br><br>

```typescript
// Partial - Make all properties optional
interface User {
  id: number
  name: string
  email: string
}

function updateUser(id: number, updates: Partial<User>) {
  // All User properties are now optional
}

// Required - Make all properties required
interface Config {
  apiUrl?: string
  timeout?: number
}

const requiredConfig: Required<Config> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
}

// Pick - Select specific properties
type UserPreview = Pick<User, 'id' | 'name'>

// Omit - Exclude specific properties
type UserWithoutEmail = Omit<User, 'email'>

// Record - Create object type with specific keys
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>

const roles: UserRoles = {
  'user1': 'admin',
  'user2': 'user',
}

// Readonly - Make all properties readonly
type ImmutableUser = Readonly<User>
```
<br><br>

## Making Reusable Components

You can create components that work with any type of data:
<br><br>

```typescript
interface DataTableProps<T> {
  data: T[]
  columns: {
    key: keyof T
    header: string
    render?: (value: T[keyof T]) => React.ReactNode
  }[]
}

function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render 
                  ? col.render(row[col.key])
                  : String(row[col.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Usage
interface Product {
  id: number
  name: string
  price: number
}

function ProductList() {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 99.99 },
  ]

  return (
    <DataTable
      data={products}
      columns={[
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Name' },
        { 
          key: 'price', 
          header: 'Price',
          render: (value) => `$${value}`
        },
      ]}
    />
  )
}
```
<br><br>

## Mistakes I Made (Learn From Me)
<br><br>

### 1. Don't Use "any" Everywhere
<br><br>

```typescript
// Don't do this
function processData(data: any) {
  return data.map((item: any) => item.value)
}

// Do this instead
interface DataItem {
  value: string
}

function processData(data: DataItem[]) {
  return data.map(item => item.value)
}
```
<br><br>

### 2. Use Optional Chaining
<br><br>

```typescript
// When data might not exist
interface User {
  profile?: {
    avatar?: string
  }
}

function UserAvatar({ user }: { user: User }) {
  // The ? checks if it exists before accessing it
  const avatarUrl = user.profile?.avatar ?? '/default-avatar.png'
  
  return <img src={avatarUrl} alt="User avatar" />
}
```
<br><br>

### 3. Be Careful with Type Assertions
<br><br>

```typescript
// Try to avoid forcing types
const value = getValue() as string // Only use when you're 100% sure

// Better approach: check the type first
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

const value = getValue()
if (isString(value)) {
  // Now TypeScript knows it's a string
  console.log(value.toUpperCase())
}
```
<br><br>

## Quick Tips

1. **Turn on strict mode**: Add `"strict": true` to your tsconfig.json - catches way more bugs
2. **Avoid "any"**: If you don't know the type, use `unknown` instead
3. **Let TypeScript guess**: You don't always need to write types, it can figure them out
4. **Use interfaces**: For objects, interfaces are cleaner than types
5. **Make reusable components**: Generics let you write components once, use everywhere
6. **Type your events**: Be specific - MouseEvent, FormEvent, etc.
7. **Use utility types**: Partial, Pick, Omit - they save so much time
8. **Check types at runtime**: Use type guard functions when you're not sure
9. **Use readonly when you can**: Prevents accidental changes
10. **Keep it simple**: Don't over-complicate your types
<br><br>

## Final Thoughts

TypeScript makes React development so much better. Yeah, you'll spend your first day wondering why you need to type everything, but then it'll save you hours of debugging later.
<br><br>

Main things to remember:
- Type your components and props properly
- Use the built-in helpers (Partial, Pick, etc.)
- Make reusable components with generics
- Don't abuse "any" or type assertions
- Let TypeScript figure stuff out when it can
<br><br>

The more you use TypeScript, the more tricks you'll learn. The community is really helpful too, so don't be afraid to ask questions!
<br><br>

**Resources**:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
<br><br>
***
<br>
Rolando (Jun) Remolacio
