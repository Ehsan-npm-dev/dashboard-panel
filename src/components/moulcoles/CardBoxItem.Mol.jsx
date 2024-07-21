import React from "react";
import { useNavigate } from "react-router-dom";

function CardBoxItemMol({ title, icon, number, detail }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick} className=" bg-white z-10 mt-[-5rem] p-2 w-[15rem] rounded-md">
      <div className="flex flex-row justify-between gap-16 items-center pt-3 p-4 font-serif text-xl ">
        {title}
        {icon}
      </div>
      <div className="text-4xl p-2 text-bold text-black">{number}</div>
      <div className="p-4 font-sans text-xl  ">{detail}</div>
    </div>
  );
}

export default CardBoxItemMol;
