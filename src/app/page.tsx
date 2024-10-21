import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Progressor from './components/Progressor'
import Product from './components/Product'
import Banner from './components/Banner'
import Offer from './components/Offer'
import Footer from './components/Footer'
import Menue from './components/Menue'
import Producttwo from './components/Producttwo'
import Card from './components/Card'
import Booking from './components/Booking'

export default function App() {
  return (
    <div className="bg-gradient-to-br white min-h-screen">

      <Navbar />
      <Carousel />
      <Progressor />
      <Product />
      <Banner />
      <Producttwo />
      <Menue />
      <Offer />
      <Card />
      <Booking />

      <Footer />
    </div>


  )
}