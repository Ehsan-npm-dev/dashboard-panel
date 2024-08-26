import React from "react";
import Content from "../organaize/Content";
import Card from "../organaize/Card";
import Active from "../organaize/Active";
import Project from "../organaize/Project";
import Tasks from "../organaize/Tasks";
import Team from "../organaize/Team";
function DashboardOrg() {
  return (
    <div className="flex flex-col gap-1 w-[1280px]  border p-2 ">
      <Content />

      <Card />
      <Active />
      <Project />
      <div className="flex flex-row justify-between">
        <Tasks />
        <Team />
      </div>
    </div>
  );
}

export default DashboardOrg;
