import { FaDropbox } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image3 from "../assets/image/td.png"
import { SiSimilarweb } from "react-icons/si";
import { GiCobweb } from "react-icons/gi";
// import { image4 } from "../assets/image/red.png";
// import {image5} from "../assets/image/yellow.png"
export const projects = [

{

    icon :<FaDropbox /> ,
    title :"File Management app" ,
    hours : 34,
    priority : "Medium",
    members : <img src={image3} alt="" />,  
      progress: "15%",

},

{

  icon :<FaSlack />,
  title :"Slack Team UI Design" ,
  hours : 34,
  priority : "Medium ",
  members : <img src={image3} alt="" />,  
    progress: "25%",

}
,

{

  icon :<FaGithub />,
  title :"GitHub Satellite Const",
  hours : 34,
  priority : "Medium ",
  members : <img src={image3} alt="" />,  
  progress: "15%",

}
,
{

  icon :<SiSimilarweb />,
  title :"3D Character Modeling",
  hours : 34,
  priority : "High",
  members : <img src={image3} alt="" />,  
  progress: "15%",

}

,
{

  icon :<GiCobweb />,
  title :"Webapp Design System",
  hours : 34,
  priority : "High ",
  members : <img src={image3} alt="" />,  
  progress: "15%",

}








]