import React from 'react'
import {Navbar, Hero} from "./components"
import { Main } from '../assets'

const Home = () => {
  return (
    <div className='relative'>
        <img src={Main} alt="flowers" className=' object-cover absolute left-0 top-0 z-[0] w-full h-full main-image opacity-60' />
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home