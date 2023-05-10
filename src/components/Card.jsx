import React from 'react'

const Card = (props) => {
  return (
    
    <div>
      <div className={`flex tile bg-primary bg-blend-multiply rounded-[30px] my-[5%] text-left mx-auto max-lg:hidden`}>
        <img src={props.img} alt={`img_0${props.index}`}/>
        <div className='ml-[60px] mt-[10px] overflow-hidden text px-6 tile-text flex-wrap max-xlg:overflow-y-scroll '>
            <h2 className='text-white text-[3rem] overflow-clip font-gotu hover:cursor-pointer px-5 py-1 bg-tertiary bg-opacity-30 rounded-[30px]'>{props.title}</h2>
            <p className='text-white indent-2 pt-4 text-[1.8rem] font-montserrat '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
      </div>
      <div className={`flex-col h-[550px] w-[400px] bg-primary bg-blend-multiply rounded-[30px] my-[5%] text-left mx-auto max-lg:block hidden overflow-y-scroll overflow-x-hidden`}>
        <img src={props.img} alt={`img_0${props.index}`}/>
        <div className='ml-[26px] mt-[12px] text px-8 tile-text flex-wrap '>
            <h2 className='text-white text-[3rem] font-gotu hover:cursor-pointer px-5 py-1 bg-tertiary bg-opacity-30 rounded-[30px]'>{props.title}</h2>
            <p className='text-white indent-4 pt-4 text-[1.8rem] font-montserrat '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
      </div>

    </div>
    
  )
}

export default Card