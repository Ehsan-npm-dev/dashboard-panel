


import Header from "../organaize/Header";
import SideBar from "../organaize/SideBar";

function Layout({children}) {
  return (
    <div className=" flex flex-col w-full pt-5  shadow-2xl p-3 justify-center items-center  ">
      <div className="  w-[1400px]  flex flex-col justify-center items-center mr-10  ">
    <Header/>
    <div className="flex flex-row justify-between rounded-md  border  bg-white  ">

      <SideBar/>
      {children}
      
    </div>
    </div>
    </div>
    
  );
}

export default Layout;
