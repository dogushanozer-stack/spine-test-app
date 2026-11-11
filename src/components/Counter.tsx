import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="card">
      <h2>Sayaç</h2>
      <p className="count">{count}</p>
      <div className="row">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          −
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Sıfırla
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </section>
  )
}
