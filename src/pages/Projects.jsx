import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

function Projects() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <h2>Projects</h2>
        <p>
          Here I've collected some of my projects I made in school and during my
          own time.
        </p>

        {/* devmemes */}
        <Project
          url="https://dev-memes.netlify.app/"
          name="Developer memes "
          extra="(WIP)"
          description="Side project I've done during my education.
        It's a collection of dev memes and also a meme generator!
        Still very much a work in progress."
        />
        {/* stensaxpåse */}
        <Project
          url="https://sten-sax-pase.netlify.app/"
          name="Rock, paper, scissor-game"
          description="Simple game written in vanilla javascript, html and css.
        In Swedish."
        />
        {/* todo */}
        <Project
          url="https://pastel-todo.netlify.app/"
          name="Todo list"
          description="Very simple pastel themed todo list built in react.
        Also built one in vue, that can be showned "
          extraUrl="https://geometrical-todo.netlify.app/"
          link="here."
        />
        {/* webshop */}
        <Project
          url="https://kitten-shop.netlify.app/"
          name="Mockup webshop"
          description="Simple mockup webshop, cat themed of course."
        />
        {/* socket.io chat */}
        <Project
          url="https://chattiluring-front.herokuapp.com/"
          name="Realtime Chat"
          description="Chat made with Socket.io. Backend first written in SQLite but later converted to Postgres so it could be deployed to Heroku. Only online until november 28th."
        />
        {/* luffarschack */}
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
