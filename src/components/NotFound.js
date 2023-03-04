import React from 'react'
import image from '../images/404.jpg'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notFound">
        <div className='text'>
            <h2>WHOOPS!</h2>
            <p>We looked <em>everywhere</em>... but we can't seem to find the page you're asking four oh four. </p>
        </div>
        <div className="imageContainer">
            <img src={image} alt='Woman who lost her papers' />
        </div>
        <div className="clearfix"></div>
    </section>
  )
}
