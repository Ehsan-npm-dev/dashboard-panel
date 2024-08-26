import React from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
function FileMol({ icon, titr, parag, url, img, icon2 }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick} className="h-[90px]">
      <div className="flex justify-center  mr-16 gap-8 items-center p-2">
        <div className="p-2">{icon}</div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{titr}</h3>
          <p className="text-gray-400">{parag}</p>
        </div>
        <div className="flex justify-center items-center gap-6">
          {img}
          {icon2}
        </div>
      </div>
    </div>
  );
}

export default FileMol;
