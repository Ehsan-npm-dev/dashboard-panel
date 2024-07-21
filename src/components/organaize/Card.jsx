import React from 'react'
import {routes} from "../config.2"
import CardBoxItemMol from '../moulcoles/CardBoxItem.Mol'
function Card() {
  return (
    <div className=' flex flex-row justify-start h-[auto] gap-16 items-center mt-4 p-4 border bg-gray-200 '>
     {routes.map((i) => (

      <CardBoxItemMol
       title = {i.title}
       icon = {i.icon}
       url = {i.url}
       number = {i.number}
       detail = {i.detail}
/>
     ))}
    </div>
  )
}

export default Card
