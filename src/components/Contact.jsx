import React from 'react'
import { Branch } from '../assets'
const Contact = () => {
  return (
    <section id="Contact" className='bg-primary bg-blend-luminosity  relative z-0'>
      <img src={Branch} alt="background-img" className="absolute left-0 top-0 z-[-1] w-full h-full opacity-60 bg-blend-darken object-cover overflow-clip"  />
        <div className ='flex flex-col shadow info text-right max-sm:text-center'>
          <h2 className='font-gotu text-[96px] leading-[150px] text-white '>
          Wanna branch<br className='max-sm:hidden block' /> out to us?
          </h2>
          <p className='font-montserrat text-[40px] leading-[50px]  text-white '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

    </section>
  )
}

export default Contact