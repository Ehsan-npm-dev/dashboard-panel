import React from "react";
import pic from "../../assets/pro/wrap.png";
import FileMol from "../moulcoles/File.Mol";
import { logos } from "../config.4";
import logo from "../../assets/img/Ellipse 2.png";
import vector from "../../assets/file/Frame 11434.png";
import foo from "../../assets/new/blog-img.jpg";
import like from "../../assets/new/like.png";
import comment from "../../assets/new/massege.png";
import share from "../../assets/new/share.png";
import gal from "../../assets/new/Frame 522.png";
import TitleMol from "../moulcoles/Title.Mol";
import {rings} from "../config.5"
import flow from "../../assets/active/avatar-24 1.png"
import flax from "../../assets/active/avatar-24 2.png"
function Layouts() {
  return (
    <section className="flex flex-col bg-slate-100 w-[1280px] h-auto p-2 ">
      <div className="flex flex-row w-full h-[100px] p-2  justify-between items-center ">
        <h2 className="text-2xl p-2 font-bold">Overview</h2>
      </div>
      <div className="border rounded-md shadow-zinc-950 ">
        <div className="flex flex-col">
          <div className="flex flex-col bg-white border rounded-lg shadow-lg ">
            <img src={pic} alt="" srcset="" />

            <div className="p-2 pt-6 ">
              <ul className="flex justify-start gap-8 p-3 text-xl items-center w-full h-[4rem]  mr-4 ">
                <li className=" hover:text-green-500 ">Overview</li>
                <li className=" hover:text-green-500 ">Project</li>
                <li>File</li>
                <li>Teams</li>
                <li>Follower</li>
                <li>Activity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-6 justify-center gap-2 w-[1280px] items-center">
        <div className="w-[622px] border rounded-lg flex flex-col p-2 shadow-lg bg-white">
          <h3 className="text-xl font-semibold p-2 mt-1">About Me</h3>
          <hr className="mt-4" />
          <h4 className="mt-3 font-semibold p-2">BIO</h4>
          <p className="p-2 overflow-clip">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
            disse var ius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <h4 className="mt-3 font-semibold p-2">POSITION</h4>
          <p className="text-black font-semibold ">
            <span className="text-gray-500 font-normal text-md p-2">
              Theme designer at{" "}
            </span>
            Bootstrap.
          </p>
          <div className="flex mt-4 justify-start gap-40 p-2">
            <div className="flex flex-col ">
              <h3 className="p-2 font-semibold ">PHONE</h3>
              <p className="mb-3 ml-2">+32112345689</p>
            </div>
            <div className="flex flex-col">
              <h3 className="p-2 font-semibold">DATE OF BIRTH</h3>
              <p className="mb-3 ml-3 ">01.10.1997</p>
            </div>
          </div>

          <div className="flex justify-start gap-[118px] p-2">
            <div className="flex flex-col ">
              <h3 className="p-2 font-sans font-extrabold  ">EMAIL</h3>
              <p className="mb-3 ml-2">dashprops@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <h3 className="p-2 font-semibold">LOCATION</h3>
              <p className="mb-3 ml-3 ">Ahmedabad, India</p>
            </div>
          </div>
        </div>
        <div className="w-[622px] rounded-lg flex flex-col shadow-lg ">
          <div className="bg-white w-full rounded-lg p-1 ">
            <h3 className="text-xl font-semibold p-2 ml-4 mt-3 ">
              Projects Contributions
            </h3>
            <hr className="mt-3" />
            {logos.map((i) => (
              <FileMol {...i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center  rounded-lg px-1 ">
        <div className="w-[620px] border rounded-lg flex flex-col justify-around py-6 bg-white  ml-3 mt-4 h-[810px]">
          <div className="flex justify-between px-3 items-center  p-2 w-full ">
            <div className="flex justify-center gap-4 items-center p-2">
              <img src={logo} alt="" />
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Jitu Chauhan</h3>
                <p className="text-gray-400">19 minutes ago</p>
              </div>
            </div>
            <div className="">
              {" "}
              <img src={vector} alt="" className="" />
            </div>
          </div>
          <p className="px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
            disse var ius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          <img src={foo} alt="logo" className="w-[550px] mt-6 ml-7" />

          <div className="flex p-2 justify-around mt-4">
            <div className="flex items-center gap-2">
              {" "}
              <img src={like} alt="like" />
              <h3>20 Like</h3>
            </div>

            <div className="flex items-center gap-2">
              {" "}
              <img src={comment} alt="like" />
              <h3>12 Comment</h3>
            </div>

            <div className="flex items-center gap-2">
              {" "}
              <img src={share} alt="like" />
              <h3>Share</h3>
            </div>
          </div>
          <div className="flex  items-center ml-12 mt-3 gap-4 p-2 ">
            <img src={gal} alt="" />
            <p className="text-gray-500">You and 20 more liked this</p>
          </div>

          <div className="flex items-center justify-center gap-5 mt-3">
            <img src={logo} alt="" />
            <input
              type="text"
              placeholder="What are your thoughts?"
              className="border p-2 rounded-md w-[300px] h-[50px]"
            />

            <button className="border p-2 rounded-xl bg-blue-700 text-white text-center text-xl font-semibold w-[100px] ">
              Send
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-[620px] border rounded-lg flex flex-col bg-white  ml-3 mt-4 h-[470px]">
            <h3 className="p-2 text-xl font-semibold ml-6 mt-2">My Team</h3>
            <hr />
            {rings.map((i) => (
              <TitleMol {...i} />
            ))}
          </div>
          <div className="w-[620px] border rounded-lg flex flex-col bg-white  ml-3 mt-4 h-[325px] p-2">

<h3 className="p-2 text-xl ml-3 font-semibold">My Activity</h3>

<hr />

<div className="flex p-2 mt-6 items-center gap-4  ">
  <img src={flow} alt="" className="w-[70px]" />
<div className="flex flex-col ">
  <h3 className="text-xl font-semibold">Dianna Smiley</h3>
  <p className="text-md font-semibold text-gray-600">Just create a new Project in Dashprops...</p>
  <h4 className="text-md font-semibold text-gray-600">3 m ago</h4>
</div>
</div>

<div className="flex p-2 mt-2 items-center gap-4 ">
  <img src={flax} alt="" className="w-[70px]" />
<div className="flex flex-col ">
  <h3 className="text-xl font-semibold">Irene Hargrove</h3>
  <p className="text-md font-semibold text-gray-600">Comment on “Bootstrap Tutorial” Says “ Hi, I m irene...</p>
  <h4 className="text-md font-semibold text-gray-600">1 hour ago</h4>
</div>
</div>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Layouts;
