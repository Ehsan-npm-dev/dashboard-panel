import React from "react";
import { useNavigate } from "react-router-dom";

function ActiveItemMol({ icon, title, hours, priority, members, progress }) {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate(url);
  };
  return (
    <div
      onClick={HandleClick}
      className="flex flex-col justify-between  items-stretch w-full bg-light"
    >
      <ul className="flex flex-row  items-center p-2 justify-around gap-[100px] ">
        <li className="flex flex-row justify-center items-center gap-4 text-[1rem] font-semibold text-md">
          {" "}
          {icon}
          {title}
        </li>

        <li className="flex flex-col">{hours}</li>
        <li className=" border  bg-yellow-400"> {priority}</li>
        <li className="flex justify-center items-center">{members}</li>
        <li className="flex items-center justify-center">{progress}</li>
      </ul>
    </div>
  );
}

export default ActiveItemMol;
