import React from 'react'
import HeroImg from '../../images/hero.png'
import './hero.css'

const Hero = () => {
  return (
    <section>
    <div className='hero-container'>
    <div className='img-wrapper'>
    <img className='hero-img' src={HeroImg}></img>
      <h1 className='hero-title'>Nothing can stop you</h1>
      <button className='hero-button'>Find Out More</button>
    </div>
    </div>
    </section>
  )
}

export default Hero