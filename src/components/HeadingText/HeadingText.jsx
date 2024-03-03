import React from 'react'
import './HeadingText.css'

function HeadingText({title , titlePrimary}) {
  return (
<h2 className='Heading-Text'>
  {title} <span>{titlePrimary}</span>
</h2>
  )
}

export default HeadingText
