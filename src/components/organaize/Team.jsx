import React from "react";
import TeamsAtom from "../atoms/Teams.Atom";
import LastMol from "../moulcoles/Last.Mol";
import ProfileMol from "../moulcoles/Profile.Mol";




function Team() {
  return (
    <div className="flex flex-col w-[750px]   rounded-md bg-white border h-[auto] mt-6 ">
      <TeamsAtom />
      <LastMol />
      <ProfileMol/>
     
    </div>
  );
}

export default Team;
