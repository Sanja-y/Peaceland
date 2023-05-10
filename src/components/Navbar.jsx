import React from 'react'
import { Peaceland } from '../assets';

const Navbar = () => {
  return (
    <nav id="Navbar" className="bg-transparent w-full flex font-gotu relative z-[0] justify-between items-center max-lg:justify-center ">
      <div>
        <img src={Peaceland} className='ml-[111px] mt-[80px] cursor-pointer relative ' alt="Peaceland-logo" />
       
      </div>
      <div className='flex flex-row flex-1 leading-[40px] max-md:hidden 
        text-[32px] italic text-white font-montserrat z-10 justify-end items-center ml-[111px] mt-[50px]'>
          <a className='navLink' href="#Home">Home</a>
          <a className='navLink' href="#Shop">Flower Shop</a>
          <a className='navLink' href='#Contact'>Contact</a>
          <a className='navLink' href='#About'>New Here?</a>
        </div>
      
      <div className='flex flex-col flex-wrap flex-1 leading-[45px] md:hidden 
      text-[25px] italic text-white font-montserrat z-10 justify-end items-center ml-[111px] mt-[80px]'>
        <a className='navLink' href="#Home">Home</a>
        <a className='navLink' href="#Shop">Flower Shop</a>
        <a className='navLink' href='#Contact'>Contact</a>
        <a className='navLink' href='#About'>New Here?</a>
      </div>
    </nav>
  )
}

export default Navbar