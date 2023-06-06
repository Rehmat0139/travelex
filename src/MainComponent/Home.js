import React from 'react'
import NavScrollExample from '../Components/Nav'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Tours from '../Components/Tours'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <NavScrollExample/>
        <Banner/>
        <Cards/>
        <Tours/>
        <Blogs/>
        <Footer/>
    </>
  )
}

export default Home