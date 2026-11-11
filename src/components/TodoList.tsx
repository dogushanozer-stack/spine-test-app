import { useState, type FormEvent } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  function addTodo(e: FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed, done: false }])
    setText('')
  }

  function toggle(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  }

  function remove(id: number) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const remaining = todos.filter((t) => !t.done).length

  return (
    <section className="card">
      <h2>Yapılacaklar</h2>
      <form className="row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yeni görev…"
          aria-label="Yeni görev"
        />
        <button type="submit">Ekle</button>
      </form>
      <ul className="todos">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? 'done' : undefined}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              {t.text}
            </label>
            <button type="button" onClick={() => remove(t.id)} aria-label="Sil">
              ×
            </button>
          </li>
        ))}
      </ul>
      <p className="muted">{remaining} görev kaldı</p>
    </section>
  )
}
