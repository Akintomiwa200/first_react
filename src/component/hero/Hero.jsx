import React from 'react'
import "./Hero.css"
import picture from '../../assets/picture.png'


export default function Hero() {
  return (
    <>
      <div id='container'>
        <div className="left">
         <div className='left-wrap'>
         <span>Hi, I'm a </span>
          <div>Software Developer</div>
          <p>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</p>
          <button>Hire me</button>
         </div>
        </div>
        <div className="right">
          <div className="right-wrap">
          <img src={picture} alt="picture" />
          </div>
        </div>
      </div>
    </>
  )
}
