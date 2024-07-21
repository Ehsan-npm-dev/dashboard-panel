import React from "react";
import avatar from "../../assets/img/Ellipse 2.png";
function General() {
  return (
    <div className="flex flex-col p-4 border  rounded-md mt-6 ml-40   w-[1050px] h-auto">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-semibold">General Setting</h1>
        <p className="text-xl">
          Your current Primary email address is{" "}
          <span className="text-blue-600">dashprops@example.com</span>
        </p>
        <hr />
        <div className="flex w-full items-center p-2 ">
          <h3 className=" text-xl ">Avatar</h3>
          <div className="flex justify-center gap-4 items-center  ml-[200px]">
            <img src={avatar} width={70} alt="logo" srcset="" />
            <button className="p-2 border rounded-lg h-[50px]  font-semibold text-purple-950 bg-white">
              Change
            </button>
            <button className="p-2 border rounded-lg h-[50px]  font-semibold text-purple-950 bg-white">
              Remove
            </button>
          </div>
          
        </div>
      </div>
      <div className="flex items-center p-2   ">
            <h3 className="text-xl items-center text-center mb-[170px]">Cover photo</h3>
            <div className="flex flex-col gap-4 ml-[150px]  ">
              <textarea name="" id="" cols="55" rows="5" placeholder=" Drag image here or " className="p-2 rounded-md border-t-white text-center"></textarea>
              <button className="p-2 border rounded-lg h-[50px] w-[100px] font-semibold text-purple-950 bg-white">Change</button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-semibold">Basic information</h3>
            <p className="text-xl">Update some personal information. Your address will never be publicly available.</p>
          </div>

          <div className="pt-8 flex flex-col">
            
            <form action="#" className="flex items-center">
            <label htmlFor="" className="text-xl w-[300px] p-2">Full name</label>
            <div className="flex p-2 justify-center gap-4 ml-[150px] ">
              <input type="text" placeholder="Full name" className="p-2 border rounded-md w-[350px]" />
              <input type="text" placeholder="Last name" className="p-2 border rounded-md w-[350px]" />
              </div>
            </form>

            <form className="flex justify-between p-2">
              <label className="text-xl p-2">Email</label>
              <input type="text" placeholder="Email" className="p-2  border rounded-md w-[715px]" />
            </form>

            <form className="p-2 flex  justify-between">
              <label htmlFor="" className="text-xl flex gap-1">Phone<span className="text-gray-400 text-xl">(option)</span></label>
              
              <input type="number" placeholder="Phone +" className="p-2 mb-2  border rounded-md w-[715px]"/>
            </form>
          </div>

          <div className="pb-2">
            <form action="#" className="flex justify-between mr-2">
              <label htmlFor="" className="text-xl p-2">Location</label>
              <input type="text" placeholder="Select country" className="p-2 border rounded-md w-[715px]"/>
            </form>
          </div>

          <div className="p-2 flex-col justify-center ml-[280px] ">
          <input type="text" placeholder="City" className="p-2 border rounded-md w-[715px]"/>
          <input type="text" placeholder="State" className="p-2 mt-4 border rounded-md w-[715px]"/>

          </div>
          <div className="pt-2">
            <button className="border p-3 rounded-lg w-[140px] bg-purple-500 ml-[285px] text-white text-[20px]">Change test</button>
          </div>

          <div className="flex flex-col gap-3 p-3 mt-8  h-[24vh] bg-white">

            <h2 className="text-3xl font-semibold">Email</h2>
            <p className="text-xl">Your current Primary email address is <span className="text-blue-700">dashprops@example.com</span> </p>

            <form action="" className="flex pt-8 items-center">
              <label htmlFor="" className="text-2xl font-semibold ">New email address</label>
              <input type="text" placeholder="Enter your email address" className="p-3 border text-xl ml-[60px] rounded-lg w-[300px] text-gray-600" />
            </form>
            <button className="p-2 border rounded-md w-[150px] mt-3 text-xl ml-[280px] bg-purple-500 text-white">Save chance</button>
          </div>
    </div>
  );
}

export default General;
