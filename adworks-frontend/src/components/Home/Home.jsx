import React from 'react'
import Carousel from './Carousel'
import "./Home.css"
import profile2 from "assets/images/KA-Laptop-NEW-1.jpg"
import profile3 from "assets/images/elevate-cards.webp"
const Home = () => {
  return (
    <div className='carobody'><Carousel profile2={profile2} profile3={profile3}/></div>
  )
}

export default Home