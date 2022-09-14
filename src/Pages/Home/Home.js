import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Samplework from "./Samplework";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Samplework></Samplework>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
