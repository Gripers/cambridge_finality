import "./supervisor.scss";
import React from "react";
import pulatov from "../../img/pulatov.png";
import checked from "../../img/true-orange.svg";

const Supervisor = () => {
  return (
    <div className="supervisor-container my-5">
      <div className="supervisor-left">
        <img src={pulatov} alt="" />
      </div>
      <div className="supervisor-right">
        <h4 className="supervisor">РУКОВОДИТЕЛЬ</h4>
        <h4 className="supervisor-name">Jahongir Pulatov</h4>
        <ul className="list-unstyled">
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>Мотиватор и Бизнесмен</p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                Основатель учебного центра <span>"Cambridge"</span>
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                <span>В возрасте 20 лет</span> открыл учебный центр, который
                помог <span>более чем 40 000 человек</span> выучить английский
                язык <span>за 7 лет</span>
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                <span>Амбассадор</span> молодых предпринимателей Узбекистана
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                Один из основателей IT-школы <span>“Mars”</span>
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                Один из основателей стартапа <span>“Modme”</span>
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={checked} alt="" />
            </div>
            <div>
              <p>
                Обладатель медали <span>"Келажак бунёдкори"</span>, награжденной
                Президентом
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Supervisor;
