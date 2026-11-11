import { useState, type FormEvent } from 'react'
import { OrderSummary } from '../components/OrderSummary'
import { navigate } from '../router'
import { useShop } from '../store/shop-context'
import { summarizeCart } from '../utils/cart'

interface FormState {
  fullName: string
  phone: string
  city: string
  address: string
  note: string
  cardNumber: string
  expiry: string
  cvc: string
}

const initial: FormState = {
  fullName: '',
  phone: '',
  city: '',
  address: '',
  note: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (f.fullName.trim().length < 3) e.fullName = 'Ad soyad gir'
  if (!/^0?5\d{9}$/.test(f.phone.replace(/\s/g, ''))) e.phone = 'Geçerli bir cep telefonu gir (5xx xxx xx xx)'
  if (!f.city.trim()) e.city = 'Şehir gir'
  if (f.address.trim().length < 10) e.address = 'Açık adres gir'
  if (!/^\d{16}$/.test(f.cardNumber.replace(/\s/g, ''))) e.cardNumber = '16 haneli kart numarası gir'
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(f.expiry)) e.expiry = 'AA/YY biçiminde gir'
  if (!/^\d{3}$/.test(f.cvc)) e.cvc = '3 haneli CVC gir'
  return e
}

export function CheckoutPage() {
  const { cart, clearCart } = useShop()
  const summary = summarizeCart(cart)
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})

  if (summary.lines.length === 0) {
    return (
      <div className="empty">
        <p className="empty-icon">🛒</p>
        <p>Ödeme yapmak için sepetinde ürün olmalı.</p>
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
    clearCart()
    navigate('/siparis-tamam')
  }

  const err = (key: keyof FormState) => errors[key] && <span className="field-error">{errors[key]}</span>

  return (
    <form className="two-col" onSubmit={submit} noValidate>
      <section className="checkout">
        <h2 className="section-title">Teslimat Bilgileri</h2>
        <div className="form-grid">
          <label>
            Ad Soyad
            <input {...field('fullName')} autoComplete="name" />
            {err('fullName')}
          </label>
          <label>
            Cep Telefonu
            <input {...field('phone')} inputMode="tel" placeholder="5xx xxx xx xx" />
            {err('phone')}
          </label>
          <label>
            Şehir
            <input {...field('city')} />
            {err('city')}
          </label>
          <label className="full">
            Açık Adres
            <textarea {...field('address')} rows={3} />
            {err('address')}
          </label>
          <label className="full">
            Kart / Sipariş Notu (isteğe bağlı)
            <input {...field('note')} placeholder="Örn. İyi ki doğdun!" />
          </label>
        </div>

        <h2 className="section-title">Ödeme</h2>
        <p className="muted small">Bu bir demo; gerçek ödeme alınmaz.</p>
        <div className="form-grid">
          <label className="full">
            Kart Numarası
            <input {...field('cardNumber')} inputMode="numeric" placeholder="0000 0000 0000 0000" />
            {err('cardNumber')}
          </label>
          <label>
            Son Kullanma
            <input {...field('expiry')} placeholder="AA/YY" />
            {err('expiry')}
          </label>
          <label>
            CVC
            <input {...field('cvc')} inputMode="numeric" placeholder="000" />
            {err('cvc')}
          </label>
        </div>
      </section>

      <OrderSummary summary={summary}>
        <button type="submit" className="btn btn-primary btn-block">
          Siparişi Tamamla
        </button>
      </OrderSummary>
    </form>
  )
}
