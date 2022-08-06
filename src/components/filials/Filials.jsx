import "./filials.scss";
import React from "react";
import { filials_db } from "../../db/filials_db";
import left from "../../img/angle-left.png";
import right from "../../img/angle-right.png";

const Filials = () => {
  return (
    <div className="filials-container">
      <h1>Где находится учебный центр “Cambridge”?</h1>
      <p>Как с нами связаться?</p>
      <div className="btns">
        <button className="prev-button">
          <img src={left} alt="" />
        </button>
        <button className="next-button">
          <img src={right} alt="" />
        </button>
      </div>
      <div className="filials-carousel owl-carousel owl-theme my-5">
        {filials_db.map((filial) => {
          return (
            <div key={filial.id} className="filial-card">
              <div className="filial-left-card">
                <img src={filial.pic} alt="" />
              </div>
              <div className="filial-right-card">
                <h2>{filial.des}</h2>
                <ul className="list-unstyled">
                  <li>
                    <p>Улица: </p>
                    <h4>{filial.street}</h4>
                  </li>
                  <li>
                    <p>Метро: </p>
                    <h4>{filial.metro}</h4>
                  </li>
                  <li>
                    <p>Ориентир: </p>
                    <h4>{filial.orient}</h4>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filials;
