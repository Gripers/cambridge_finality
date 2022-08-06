import React from "react";
import TeamHead from "../components/team-head/TeamHead";
import Supervisor from "../components/supervisor/Supervisor";

const Team = () => {
  return (
    <div style={{ background: "#f5f5f5", height: "100%", overflow: "hidden" }}>
      <TeamHead />
      <Supervisor />
    </div>
  );
};

export default Team;
