import React from 'react'
import './prtfolio.css'
import Card from '../../components/Ui/Card'
import HeadingText from '../../components/HeadingText/HeadingText'

import { portfolio } from '../../data/data'
import Testmonials from '../../components/Testmonials/Testmonials'






function Portfolio() {
  return (
    <>
<section className='portfolio'>
  <HeadingText  title={'Resent'} titlePrimary={'work'}/>
  <div className="container portfolio-container">
    {
      portfolio.map(({id , img , name , des , github})=>{
        return (
          <Card classname={'project'} key={id} >
            <img src={img} alt="img" />
            <h3>{name}</h3>
            <p>{des}</p>
            <a href={github}></a>
          </Card>
        )
      })
    }
  </div>
</section>
<Testmonials />
</>
  )
}

export default Portfolio
