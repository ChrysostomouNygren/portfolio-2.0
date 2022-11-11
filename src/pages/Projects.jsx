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
          Here I've collected some of the projects I made in school and in my
          spare time.
        </p>

        {/* devmemes */}
        <Project
          url="https://dev-memes.netlify.app/"
          name="Developer memes "
          extra="(WIP)"
          description="A side project I've done during my education.
        It's a collection of dev memes and it also contains a meme generator!
        Still very much a work in progress."
        />
        {/* stensaxpåse */}
        <Project
          url="https://sten-sax-pase.netlify.app/"
          name="Rock, paper, scissors-game"
          description="A simple game written in vanilla javascript, html and css.
        In Swedish."
        />
        {/* todo */}
        <Project
          url="https://pastel-todo.netlify.app/"
          name="Todo list"
          description="A pastel themed todo list built in React.
        I also built one in Vue, that can be viewed "
          extraUrl="https://geometrical-todo.netlify.app/"
          link="here."
        />
        {/* webshop */}
        <Project
          url="https://kitten-shop.netlify.app/"
          name="Mockup webshop"
          description="A simple mockup webshop, cat themed of course."
        />
        {/* socket.io chat */}
        <Project
          url="https://chattiluring-front.herokuapp.com/"
          name="Realtime Chat"
          description="A chat made with Socket.io. Backend was written in SQLite, but later converted to Postgres so it could be deployed to Heroku. Only online until november 28th."
        />
        {/* luffarschack */}
        {/* FEA-flix */}
        <Project
          url="https://feaflix.netlify.app/home"
          name="FEAflix"
          description="This is a group project that me and 3 of my classmates did together in a week. Styling is done with SASS. It's our own little version of IMDB and we used "
          extraUrl="https://www.themoviedb.org/"
          link="TMDB-API"
        />
        {/* ts todo */}
        <Project
        url='https://typescript-todo-lolol.netlify.app/'
        name='Typescript todo'
        description="Yet another todo-list, this time I've implemented typescript and SASS."
        />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
