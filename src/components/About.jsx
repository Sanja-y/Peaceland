import React from 'react'
import { Garden } from '../assets'
const About = () => {
  return (
    <section id="About" className='bg-tertiary relative z-0'>
      <img src={Garden} alt="background-img" className="absolute left-0 top-0 z-[-1] w-full h-full opacity-60 bg-blend-darken object-cover "  />
        <div className='description shadow max-md:text-center'>
          <h2 className='font-gotu text-[96px] leading-[150px] text-white text-left'>
          About Peace<br className='max-sm:block hidden' />land.
          </h2>
          <p className='font-montserrat text-[40px] leading-[50px] text-white text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
    </section>
  )
}

export default About