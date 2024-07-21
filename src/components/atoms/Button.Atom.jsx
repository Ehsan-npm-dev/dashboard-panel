import React from 'react'
import { Link } from 'react-router-dom'
function ButtonAtom() {
  return (
  <Link to="/link"><button type='submit' className='p-2 border text-blue-200 rounded-md hover:text-black hover:font-bold hover:bg-white'>Create New Project</button></Link>
  )
}

export default ButtonAtom
