import "./team-head.scss";
import React from "react";
import team_head from "../../img/team-head.jpg";

const TeamHead = () => {
  return (
    <div className="team-head-container">
      <div className="team-head-left">
        <img src={team_head} alt="" />
      </div>
      <div className="team-head-right">
        <h3>
          <span>Наша миссия </span> - вывести целеустремленную молодежь с
          внутренними ценнностями на уровень мировых лидеров.
        </h3>
      </div>
    </div>
  );
};

export default TeamHead;
