import React from "react";
import "../styles/about.css";

// skill symbols
import ps from "../assets/adobe-photoshop.png";
import css from "../assets/css-3.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/java-script.png";
import reactbw from "../assets/reactBW.png";
import sass from "../assets/SASS.png";
import ts from "../assets/ts.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <h2>About me:</h2>
        <p>
          Katerina Chrysostomou Nygren <br />
          Born in 1988. <br />I enjoy cats, nature, plants, music and vegan
          food.
        </p>
        <h4>Skills:</h4>
        <Skills url={html} alt="html logo" title="Html" />
        <Skills url={css} alt="css 3 logo" title="Css 3" />
        <Skills url={js} alt="javascript logo" title="Javascript" />
        <Skills url={reactbw} alt="react logo" title="React.js" />
        <Skills url={git} alt="git log" title="Git" />
        <Skills url={ps} alt="adobe photoshop logo" title="Adobe photoshop" />
        <Skills url={sass} alt="SASS" title="SASS" />
        <Skills url={ts} alt="typescript" title="Typescript" />
        <Skills url={flutter} alt="flutter" title="Flutter" />
        <Skills url={dart} alt="dart" title="Dart" />

        <p>
          Professional googler, fast learner and collector of memes.
          <br />
          Educated in art and been working retail for 10+ years. <br />
        </p>
        <h2>Contact:</h2>
        <ul>
          <li>
            <Contact
              url="mailto: katerina.chrysostomou@hotmail.com"
              name="Email"
            />
          </li>
          <li>
            <Contact
              url="https://www.linkedin.com/in/katerina-chrysostomou-nygren/"
              name="Linkedin"
            />
          </li>
          <li>
            <Contact
              url="https://github.com/ChrysostomouNygren"
              name="Github"
            />
          </li>
          <li>
            <Contact
              url="https://www.instagram.com/kottlatastic/"
              name="Instagram"
            />
          </li>
          <li>
            <Contact url="https://www.facebook.com/kottla" name="Facebook" />
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default About;
