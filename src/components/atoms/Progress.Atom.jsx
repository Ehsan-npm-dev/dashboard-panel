import React from 'react'
import run from "../../assets/img/trending-up.svg"
function ProgressAtom() {
  return (
    <div className='flex flex-col gap-2 justify-center pt-4 items-center'>
      <img src={run} className='w-8'/>
      <h3 className='text-xl'>32%</h3>
      <p className='text-md'>in-Progress</p>
    </div>
  )
}

export default ProgressAtom
