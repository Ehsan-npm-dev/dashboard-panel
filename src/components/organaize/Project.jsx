import React from 'react'
import {projects} from '../config.3'
import ActiveItemMol from '../moulcoles/ActiveItem.Mol'
function Project() {
  return (
    <div className='bg-gray-100 '>
      <ul className='flex flex-row  items-center justify-between px-5 border p-3 text-xl font-sans'>
        <li>Project name</li>
        <li className='ml-[100px]'>Hours</li>
        <li>Priority</li>
        <li>Members</li> 
        <li>Progress</li>
      </ul>
      
      {projects.map((i)=>(
        
      <ActiveItemMol
     
     {...i}
      />
     ))}

     <div className='flex flex-row justify-center items-center p-3 bg-white border-t-2 text-[#624BFF] text-[1rem]'> <a href='View' className='font-normal text-[20px] '>View All Projects</a></div>
    </div>
  )
}

export default Project
