import React from "react";
import "../styles/home.css";
import photo from "../assets/portrait.jpg";

// components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home">
        <p>
          My name is Katerina and I'm an 33 years old frontend- & appdeveloping
          student, gratuating in the summer of 2023 from <a href="https://cmeducations.se/">Changemaker Educations</a>.
        </p>
        <img className="portrait" src={photo} alt="portrait" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
