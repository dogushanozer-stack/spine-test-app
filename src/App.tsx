import { Counter } from './components/Counter'
import { TodoList } from './components/TodoList'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>spine-test-app</h1>
      <p className="muted">SpineOS Uygula modu deneme alanı</p>
      <div className="grid">
        <Counter />
        <TodoList />
      </div>
    </main>
  )
}

export default App
