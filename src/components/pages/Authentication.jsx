import React from "react";
import Img from "../../assets/img/logo (1).png";
import { CheckBox } from "@mui/icons-material";
function Authentication() {
  return (
    <div className="flex w-[1280px] h-[1300px] items-center p-2 justify-center  ">
      <div className=" p-2  flex flex-col  border bg-white w-[480px] rounded-lg h-[560px] pt-6 ">
        <div className="flex p-2 gap-1 ml-4 flex-star items-center rounded-md ">
          <img src={Img} alt="" className="w-[40px]" />
          <h3 className="text-3xl font-bold ">DashUI</h3>
        </div>
        <p className="text-xl p-2 ml-4 font-semibold">Please enter your user information.</p>

        <form className="flex flex-col pt-6 p-2 ml-4">
          <label htmlFor="" className="text-xl pb-2">
            Username :
          </label>
          <input
            type="username"
            placeholder=" "
            className="border rounded-md p-2 w-[300px]"
          />
        </form>

        <form className="flex flex-col pt-2 p-2 ml-4">
          <label htmlFor="" className="text-xl pb-2">
            password :
          </label>
          <input
            type="password"
            placeholder=" "

            className="border rounded-md p-2 w-[300px]"
          />
        </form>

        <form action="" className="flex items-center gap-2 p-4 ml-4  h-[200px] text-semibold ">
          <input type="checkbox" className=" border-t-4   "  />
          <label className="text-xl">Remember Me</label>
        </form>
        <div className="flex justify-center mt-4">
          <button className="border w-[400px] p-2 hover:text-black hover:bg-white   bg-blue-700 text-white text-xl rounded-xl"> Signing</button>
        </div>

        <div className="p-2 flex justify-between px-6 mt-3 ">
          <p className="text-xl font-bold text-red-600">Don't <span className="font-semibold text-blue-700"> have an account?</span></p>
          <p className="text-lg hover:font-bold">Forgot Password</p>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
