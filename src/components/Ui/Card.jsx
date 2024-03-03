import React from 'react'
import './Card.css'

function Card({classname, children}) {
  return (
    <article className={`card ${classname}`}>
      {children}
    </article>
  )
}

export default Card
