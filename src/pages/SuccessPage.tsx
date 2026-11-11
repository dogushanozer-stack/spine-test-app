import { useState } from 'react'

export function SuccessPage() {
  const [orderNo] = useState(() => Math.floor(100000000 + Math.random() * 900000000))

  return (
    <div className="empty">
      <p className="empty-icon">🎉</p>
      <h2>Siparişin alındı!</h2>
      <p className="muted">
        Sipariş numaran: <strong>#{orderNo}</strong>
      </p>
      <p className="muted">Siparişin hazırlanmaya başladı. Kargoya verildiğinde bilgilendireceğiz.</p>
      <a href="#/" className="btn btn-primary">
        Alışverişe Devam Et
      </a>
    </div>
  )
}
