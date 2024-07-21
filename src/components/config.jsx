import { CiHome } from "react-icons/ci";
import { SiPowerpages } from "react-icons/si";
import { RxLockClosed } from "react-icons/rx";
import { LuLayout } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
export const routes = [
  {
    title: "Dashboard",
    icon: <CiHome />,
    icon2:<MdArrowDropDown /> ,
    url: "/Dashboard",
    childs: [
      {
        title: "Project",
        icon: null,
      },
    ],
  },
  {
    title: "Pages",
    url: "/pages",
    icon: <SiPowerpages />,
    childs: [
      {
        title: "profile",
        icon: null,
      },
      {
        title: "Accounts",
        icon: null,
      },
      {
        title: "Invoice",
        icon: null,
      },
    ],
  },
  {
    url: "/Authentication",
    title: "Authentication",
    icon: <RxLockClosed />,
  },

  {
    url: "/Layouts",
    title: "Layouts",
    icon: <LuLayout />,
  },

  {
    title : "Cards",
    url   : "/cards",
     icon : <LuLayout />
  },
  {

    title : "Tables",
    url:"/Tables",
    icon : <RxLockClosed />

  },

  {

    title : "Components",
    url:"/Components",
    icon :<SiPowerpages /> 

  },

  {

    title : "Utilities",
    url:"/Utilities",
    icon :<SiPowerpages /> 

  }


];
