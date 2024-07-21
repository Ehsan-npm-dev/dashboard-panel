import React from "react";
import TaskMol from "../moulcoles/Task.Mol";
import piv from "../../assets/img/graph.svg";
import CompletedAtom from "../atoms/Completed.Atom";
import ProgressAtom from "../atoms/Progress.Atom";
import BehindAtom from "../atoms/Behind.Atom";
function Tasks() {
  return (
    
    <div className="w-[430px]  h-[auto] px-6 border p-6 mt-6 rounded-md ml-6 ">
      <TaskMol />
      <div className="flex justify-center items-center pt-8">
        <img src={piv} />
      </div>

      <div className=" flex flex-row justify-between items-center">
        <CompletedAtom/>
        <ProgressAtom/>
        <BehindAtom/>
      </div>
    </div>
  );
}

export default Tasks;
