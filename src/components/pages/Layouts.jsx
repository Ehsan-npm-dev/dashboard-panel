import React from 'react'
import img from "../../assets/img/profile.jpg"
function Layouts() {
  return (
    <div className='flex flex-col  w-[1280px] h-auto p-2'>
      <h2 className='text-2xl p-3 font-bold'>Overview</h2>
      <div className=' '>
<img src={img} alt="" className='' />

<h4 className='text-xl '>Overview</h4>
      </div>
    </div>
  )
}

export default Layouts
