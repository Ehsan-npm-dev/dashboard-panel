import React from 'react'
import tick from "../../assets/img/check-circle.svg"
function CompletedAtom() {
  return (
    <div className='flex flex-col gap-2 pt-4 justify-center items-center'>
      <img src={tick} className='w-8'/>
      <h3 className='text-xl'>76%</h3>
      <p className='text-md'>Completed</p>
    </div>
  )
}

export default CompletedAtom
