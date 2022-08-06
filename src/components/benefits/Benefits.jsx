import "./benefits.scss";
import React from "react";
import { benefits_db } from "../../db/benefits_db";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h1>Преимущества учебного центра “Cambridge”</h1>
      <p>У каждого из наших студентов будут следующие преимущества</p>
      <div className="benefits-card">
        <ul className="pros list-unstyled">
          {benefits_db.map((benefit) => {
            return (
              <li key={benefit.id} data-aos="fade-up" data-aos-duration="1000">
                <img src={benefit.pic} alt="" />
                {benefit.title}
              </li>
            );
          })}
        </ul>
        <div className="benefits-carousel owl-carousel owl-theme">
          <div>
            <ul className="list-unstyled">
              {benefits_db.slice(0, 3).map((benefit) => {
                return (
                  <li key={benefit.id}>
                    <img src={benefit.pic} alt="" />
                    {benefit.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="list-unstyled">
              {benefits_db.slice(3, 6).map((benefit) => {
                return (
                  <li key={benefit.id}>
                    <img src={benefit.pic} alt="" />
                    {benefit.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="list-unstyled">
              {benefits_db.slice(6, 9).map((benefit) => {
                return (
                  <li key={benefit.id}>
                    <img src={benefit.pic} alt="" />
                    {benefit.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="benefits-btn my-4">
        <a className="btn">
          <span>Записаться на курс</span>
        </a>
      </div>
    </div>
  );
};

export default Benefits;
