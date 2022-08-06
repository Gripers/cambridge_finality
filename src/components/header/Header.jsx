import "./header.scss";
import React from "react";
import boy from "../../img/boy2.png";

const Header = () => {
  return (
    <div className="header-container my-5">
      <div className="left">
        <h2>
          <span>Получите IELTS 7,0 и выше </span>
          на первом экзамене.
        </h2>
        <p>
          За 7 лет в Учебном центре Кембриджа <br /> обучалось более 40 000
          человек.
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="btn">
          <span>Записаться на первый урок</span>
        </a>
      </div>
      <div className="right">
        <img src={boy} alt="" />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="btn">
          <span>Записаться на первый урок</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
