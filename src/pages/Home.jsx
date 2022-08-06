import React from "react";
import Header from "../components/header/Header";
import Courses from "../components/courses/Courses";
import Benefits from "../components/benefits/Benefits";
import Tour from "../components/tour/Tour";
import Filials from "../components/filials/Filials";

const Home = () => {
  return (
    <div>
      <Header />
      <Courses />
      <Benefits />
      <Tour />
      <Filials />
    </div>
  );
};

export default Home;
