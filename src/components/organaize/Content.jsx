import React from 'react'
import ProjectsAtom from "../atoms/Projects.Atom"
import ButtonAtom from '../atoms/Button.Atom'
function Content() {
  return (
    <div className='flex flex-row justify-between items-center p-2  rounded-md bg-[#624BFF] h-[150px] pb-16 '>
      <ProjectsAtom/>
      <ButtonAtom/>
    </div>
  )
}

export default Content
