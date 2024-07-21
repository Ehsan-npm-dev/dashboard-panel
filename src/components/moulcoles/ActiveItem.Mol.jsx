import React from "react";
import { useNavigate } from "react-router-dom";

function ActiveItemMol({ icon, title, hours, priority, members, progress }) {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate(url);
  };
  return (
    <div   onClick={HandleClick} className="flex flex-col justify-between w-full bg-light">
   <ul className="flex flex-row  items-center p-2 justify-around gap-[170px]  ">
    <li className="flex flex-row items-center gap-4 text-[1rem] font-semibold text-md"> {icon}{title}</li>
   
    <li className="flex flex-col justify-center items-center">{hours}</li>
    <li className=" border  items-center bg-yellow-400"> {priority}</li>
    <li>{members}</li>
    <li>{progress}</li>
   </ul>
       
       
       
        
       
        
        
      
        
      </div>
      
        
      
    
  );
}

export default ActiveItemMol;
