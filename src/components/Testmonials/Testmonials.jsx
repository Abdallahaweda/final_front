import React from 'react'
import './Testmonials.css'
import HeadingText from '../HeadingText/HeadingText'
import Card from '../Ui/Card'
import { testimonials } from '../../data/data'
import {Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testmonials() {
  return (
<section>
  <HeadingText titlePrimary={"Testimonials"}/>
  <div className="container testimonials-container">
    <Swiper className='testimolinals-wrapper' slidesPerView={1} spaceBetween={10} >
      {
        testimonials.map(({id ,img , name ,des })=>{
          return(
            <SwiperSlide key={id}>
              <Card classname={"testimonial"}>
                <img src={img} alt="img" />
                <h5>{name}</h5>
                <p>{des}</p>
              </Card>
            </SwiperSlide>
          )
        })
      }
    </Swiper>

    
  </div>
</section>
  )
}

export default Testmonials
