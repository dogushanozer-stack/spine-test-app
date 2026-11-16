import { useState, type FormEvent } from 'react'

interface FormState {
  email: string
  password: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = { email: '', password: '' }

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Geçerli bir e-posta gir'
  if (f.password.length < 6) e.password = 'Şifre en az 6 karakter olmalı'
  return e
}

export function LoginPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="empty login">
        <p className="empty-icon">👤</p>
        <p role="status">Giriş başarılı (demo).</p>
        <a href="#/" className="btn btn-primary">
          Alışverişe Dön
        </a>
      </div>
    )
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value })),
    'aria-invalid': Boolean(errors[key]),
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setForm(initial)
    setDone(true)
  }

  const err = (key: keyof FormState) => errors[key] && <span className="field-error">{errors[key]}</span>

  return (
    <form className="checkout login" onSubmit={submit} noValidate>
      <h2 className="section-title">Giriş Yap</h2>
      <div className="form-grid">
        <label className="full">
          E-posta
          <input {...field('email')} type="email" autoComplete="email" placeholder="ornek@eposta.com" />
          {err('email')}
        </label>
        <label className="full">
          Şifre
          <input {...field('password')} type="password" autoComplete="current-password" />
          {err('password')}
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Giriş Yap
      </button>
      <p className="muted small login-note">Bu bir demo; gerçek giriş yapılmaz.</p>
    </form>
  )
}
