import React from 'react'
import './promo.css'

import ReactPlayer from 'react-player/lazy'
const Promo = () => {
  return (
    <section className='promo-section'>
     <div className='promo-container'>
      <div className='promo-content'>
        <h1 className='promo-title'>Feel the excellent wet braking with Driveways! </h1>
        <button className='promo-button'> Watch All Videos</button>
        </div>
        <div className='promo-video-wrapper'>
        <ReactPlayer className='promo-player'
        controls
        width='1450px'
        height='100%'
        url='https://www.youtube.com/watch?v=gCPp57Kkwew&ab_channel=LassaT%C3%BCrkiye'
        onReady={ ()=> console.log ('onReady callback')}
        onStart={ ()=> console.log ('onStart callback')}
        onPause={ ()=> console.log ('onPause callback')}
        onError={ ()=> console.log ('onError callback')}
         />
       
        </div>
    </div>
    </section>
  )
}

export default Promo