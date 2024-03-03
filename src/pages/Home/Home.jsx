import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Image/WhatsApp Image 2023-10-12 at 14.32.01_4695e495.jpg'
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Theme from '../../components/Theme/Theme';


function Home() {
let name = 'Mohamed Salah'

  return (
    <header>
      <div className="container container-lg header-container">
        <img src={img} alt="img" />
        <div className="header-right">
          <h1>
            <span>Hi, I’m {name}</span><br />Fitness Coach
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ullam. Id tempora, debitis neque nesciunt voluptates obcaecati vitae a doloribus sed eaque libero adipisci reprehenderit!
          </p>
            <Link className='btn' to={'/about'}>
              Subscribe
              {/* <span><FontAwesomeIcon icon={faArrowRight} /></span> */}
            </Link>
            <Link className='btn' to={'/about'}>
              About Me
              <span><FontAwesomeIcon icon={faArrowRight} /></span>
            </Link>
            
        </div>

      </div>
    </header>
  )
}

export default Home
