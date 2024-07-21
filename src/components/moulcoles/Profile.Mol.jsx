import React from 'react'
import PicAtom from '../atoms/Pic.Atom'
import dash from "../../assets/icon/Team/more-vertical.svg"
import san from "../../assets/img/Frame 576.png"
function ProfileMol() {
  return (
    <div className='flex flex-col justify-center'>
    <div className='bg-white h-[100px] px-8 flex border  flex-row justify-between items-center first-letter '>
      <PicAtom/>
      <h4 className='text-serif text-ml items-center pt-1'>Today</h4>
      <img src={dash} className='w-[20px] h-[6vh] items-center'/>
    </div>

    <div className='bg-white h-[100px] px-8 flex border  flex-row justify-between items-center first-letter '>
      <PicAtom/>
      <h4 className='text-serif text-ml items-center pt-1'>Today</h4>
      <img src={dash} className='w-[20px] h-[6vh] items-center'/>
    </div>

    <div className='bg-white h-[100px] px-8 flex border  flex-row justify-between items-center first-letter '>
      <PicAtom/>
      <h4 className='text-serif text-ml items-center pt-1'>Today</h4>
      <img src={dash} className='w-[20px] h-[6vh] items-center'/>
    </div>
    <div className='bg-white h-[100px] px-8 flex border  flex-row justify-between items-center first-letter '>
      <PicAtom/>
      <h4 className='text-serif text-ml items-center pt-1'>Today</h4>
      <img src={dash} className='w-[20px] h-[6vh] items-center'/>
    </div>
    </div>
  )
}

export default ProfileMol
 