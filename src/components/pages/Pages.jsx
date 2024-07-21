import React from 'react'
import AccountAtom from '../atoms/Account.Atom'
import General from '../moulcoles/General'


function Pages() {
  return (
    <div className='w-[1280px] p-3'>
     <AccountAtom/>
     <hr className='mt-4' />
     <General/>
     
    </div>
  )
}

export default Pages
