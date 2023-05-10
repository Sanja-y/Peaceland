import React from 'react'

const Button = () => {
  return (
    <div>
      <button type="button" className={`bg-secondary w-[125px] h-[35px] z-5 max-sm:hidden block rounded-full top-4 right-[0] m-auto hover:drop-shadow-none drop-shadow-md cursor-pointer absolute`}>
            <p className='font-poppins font-semibold px-[5px] text-[13px]'>
              Get Tickets
            </p>
      </button>
      <button type="button" className={`bg-secondary w-[125px] h-[35px] z-5 hidden max-sm:block rounded-full top-4 right-1/2 m-auto place-content-center hover:drop-shadow-none drop-shadow-md cursor-pointer absolute`}>
            <p className='font-poppins font-semibold px-[5px] text-[13px]'>
              Get Tickets
            </p>
      </button>
    </div>
    
    
  )
}

export default Button