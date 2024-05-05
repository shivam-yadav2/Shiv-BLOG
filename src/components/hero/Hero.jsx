import { Button } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


function Hero() {
  return (
    <>
      <div className='w-full relative'>
        <img className='w-full h-[100vh] ' src="https://images.pond5.com/abstract-white-dots-random-moving-footage-102945349_iconl.jpeg" alt="" />
        <div className='flex md:flex-col gap-3 items-center  absolute  md:top-[40%] md:left-[13%]'>
          <div className='justify-center flex items-end gap-4 '>
            <h1 className=' text-8xl'>Learn Everything About </h1>
            <NavLink>
              <Button color="blue" size='lg' className='text-xl' >Coding</Button>
            </NavLink>
          </div>
          <NavLink>
            <Button color='yellow' className='text-md'>Know More</Button>
          </NavLink>
        </div>

      </div>
    </>
  )
}

export default Hero