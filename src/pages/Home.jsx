import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection'
import TitleSection from '../components/TitleSection'

const Home = () => {
  return (
    <Box sx={{}}>
      <Header/>
      <TitleSection/>
      <HeroSection/>
      <MainSection/>
    </Box> 
  )
}

export default Home