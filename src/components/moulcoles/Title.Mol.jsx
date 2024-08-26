import React from "react";
import { useNavigate } from "react-router-dom";

function TitleMol({ icon, name, title, img, img2, url }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick}>
      <div className="flex justify-between px-6 items-center">
        <div className="flex  items-center justify-center p-2 gap-3  mr-3">
          <div className="p-2"> {icon}</div>

          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-xl">{title}</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 p-2 items-center">
          {img}
          {img2}
        </div>
      </div>
    </div>
  );
}

export default TitleMol;
