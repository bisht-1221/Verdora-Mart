import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero.jsx'
import Category from '../categoty/Category.jsx'
import Values from '../Values/Values.jsx'
import Product from '../products/Product.jsx'
import Discount from '../discount/Discount.jsx'
import OurProcess from '../OurProcess/OurProcess.jsx'



const home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category/>
      <Values/>
      <Product/>
      <Discount/>
      <OurProcess/>
     
    </div>
  )
}

export default home