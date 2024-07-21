import React from 'react'
import beh from "../../assets/img/trending-down.svg"
function BehindAtom() {
  return (
    <div className='flex flex-col pt-4 justify-center gap-2 items-center'>
      
      <img src={beh} className='w-8'/>
      <h3 className='text-xl'>13%</h3>
      <p className='text-md'>Behind</p>
    </div>
  )
}

export default BehindAtom
