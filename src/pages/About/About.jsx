import React from 'react'
import './about.css'
import HeadingText from '../../components/HeadingText/HeadingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../components/Ui/Card'
import { experience } from '../../data/data'



function About() {
  return (
    <>
      <section className='about'>
        <HeadingText title={'About'} titlePrimary={'Me'}/>
        <div className="container about-container">
          <div className="about-left">
            <h3>I’m Mohamed Salah</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laboriosam! Voluptate quo quod cum a voluptas. Sapiente amet voluptatum odio aperiam temporibus eligendi, quidem voluptate.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet totam magnam nesciunt doloribus temporibus maiores corrupti sapiente, illum excepturi est, quas iusto officiis provident reiciendis!
            </p>
            {/* <a href="" ><FontAwesomeIcon  /></a> */}
            
          </div>
          <div className="about-right">
            {
              experience.map(({id , no , title})=>{
                return (
                  <Card key={id} classname={'experience-card'}>
                    <h1><span>{no}</span></h1>
                    <p>{title}</p>
                  </Card>
                )
              })

            }
            
          </div>
        </div>
      </section>
    </>
  )
}

export default About
