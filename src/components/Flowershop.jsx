import React from 'react'
import Card from './Card'
import { Shop } from '../assets'
const Flowershop = () => {
  return (
    <section id="Shop" className='bg-[#0BDEB8] w-full p-5 '>
      <div className='font-gotu p-[40px] text-white shadow'>
        <div>
          <h2 className='text-[48px] text-center'>
          Here’s The Flower Shop
          </h2>
        </div>
        <div>
          <h2 className='text-[48px] text-end max-md:text-center '>
              have a look around...
          </h2>
        </div>
      </div>
      {
          Shop.map((Shop)=>(
            <Card key={Shop.name} index={Shop.id} img={Shop.img} length={Shop.length} title={Shop.title}  />
          ))
      }
      

    </section>
  )
}

export default Flowershop