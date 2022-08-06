import "./courses.scss";
import React from "react";
import { courses_db } from "../../db/courses_db";
import calendar from "../../img/calendar.svg";
import mini_target from "../../img/mini_target.svg";
import arrow from "../../img/up-arrow.svg";

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Выберите курс, который вам подходит</h1>
      <div className="my-5">
        <div
          className="owl-carousel owl-theme courses-carousel"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {courses_db.map((course) => {
            return (
              <div key={course.id} className="course-box">
                <div key={course.id} className="course-card">
                  <div className="course-card-up">
                    <img src={course.img} alt="" />
                    <h2>{course.des}</h2>
                  </div>
                  <div className="course-card-down">
                    <ul className="list-unstyled">
                      <li>
                        <img src={calendar} alt="" />
                        {course.first_title}
                      </li>
                      <li>
                        <img src={mini_target} alt="" />
                        {course.second_title}
                      </li>
                      <li>
                        <img src={arrow} alt="" />
                        {course.third_title}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="courses-btn">
          <a className="btn">
            <span>Записаться на курс</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
