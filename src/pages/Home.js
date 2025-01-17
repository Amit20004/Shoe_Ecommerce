import React from 'react'
import Navbar from '../components/Navbar'
import CarouselComponent from '../components/Carousel'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'
import HeroSection from '../components/HeroSection'
import PromoBanner from '../components/PromoBanner'
import Login from './Login'
import ContentSection from '../components/ContentSection'

function Home() {
  return (
    <div>
    <Navbar  />
    <HeroSection/>
    <ContentSection/>
    <CarouselComponent/>
    <PromoBanner/>
    <ProductCards/>
    <Footer/>
    </div>
  )
}

export default Home