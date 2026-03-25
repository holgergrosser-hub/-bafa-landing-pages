import React, { useState } from 'react'

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
          <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            {item.q}
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
