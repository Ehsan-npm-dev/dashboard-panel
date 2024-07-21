/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function SideBarItemMol({ icon, active, url, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex font-bold dur flex-row items-center  duration-100 cursor-pointer px-[14px] py-[10px] gap-[24px] ${
        active
          ? "bg-[#eaf2fd] rounded-lg text-[#2F80ED] "
          : "hover:text-[#2F80ED]"
      }`}
    >
      {icon}
      {title}
    </div>

  );
}

export default SideBarItemMol;
