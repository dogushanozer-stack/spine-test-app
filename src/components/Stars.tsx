export function Stars({ rating, count }: { rating: number; count?: number }) {
  const full = Math.round(rating)
  return (
    <span className="stars" aria-label={`5 üzerinden ${rating} puan`}>
      <span className="stars-icons">
        {'★'.repeat(full)}
        <span className="stars-empty">{'★'.repeat(5 - full)}</span>
      </span>
      <span className="stars-value">{rating.toFixed(1)}</span>
      {count !== undefined && <span className="stars-count">({count.toLocaleString('tr-TR')})</span>}
    </span>
  )
}
