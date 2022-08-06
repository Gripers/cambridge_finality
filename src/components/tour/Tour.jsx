import "./tour.scss";
import React from "react";
import bg from "../../img/fon.jpg";

const Tour = () => {
  return (
    <div className="tour-container my-5">
      <h1>Добро пожаловать в тур по нашему учебному центру!</h1>
      <p>
        Проверьте свой английский бесплатно и посетите один из наших учебных
        центров бесплатно, оставьте свои данные для посещения тура.
      </p>
      <div className="boxes-con my-4">
        <div
          className="left-box"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="fields">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Номер телефона" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Коментарии и предложения"
            ></textarea>
          </div>
          <button>Отправить</button>
        </div>
        <div
          className="right-box"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tour;
