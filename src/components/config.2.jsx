import { RiMessage2Fill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoBasketballSharp } from "react-icons/io5";
export const routes = [

    {

        title : "Projects",
        icon: <RiMessage2Fill />   ,
        url: "/"  , 
        number:18,
        detail : "2Completed" 

    },
    
    {

        title : "Active ",
        icon:  <FaTasks />  ,
        url: "/"  , 
        number:132,
        detail : "28Completed" 

    },
    {

        title : "Teams ",
        icon:  <RiTeamFill /> ,
        url: "/"  , 
        number:"12",
        detail : "1 Completed" 

    },
    {

        title : "Productivity ",
        icon:  <IoBasketballSharp /> ,
        url: "/"  , 
        number:"76%",
        detail : "5% Completed" 

    }
  
]


