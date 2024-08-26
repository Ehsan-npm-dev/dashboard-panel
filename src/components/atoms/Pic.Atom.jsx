import React from 'react'
import image from "../../assets/icon/Team/Ellipse 495.svg"
function PicAtom() {
  return (
    <div className='flex flex-row h-[5vh] justify-center gap-8  font-light'>
      <img src={image} className='w-[65px]'/>
      <div className='flex flex-col justify-center '>
        <h2 className='font-bold text-xl'>Jitu Chauhan</h2>
        <p className=' text-gray-600 text-xl'>jit@example.com</p>
      </div>

<div className='flex justify-center items-center px-6'>
    <h3 className='text-2xl font-sans text-red-900'>Front Developer</h3>
</div>
    
    </div>
  )
}

export default PicAtom
