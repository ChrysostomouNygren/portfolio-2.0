import React from "react";
import "../styles/about.css";

// skill symbols
import ps from "../assets/adobe-photoshop.png";
import css from "../assets/css-3.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/java-script.png";
import reactbw from "../assets/reactBW.png";

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
          Borned in 1988. <br />I speak swedish, english, german and sarcasm.
          Enjoys cats, nature, plants, vegan food and music.
        </p>
        <h4>Skills:</h4>
        <Skills url={html} alt="html logo" title="Html" />
        <Skills url={css} alt="css 3 logo" title="Css 3" />
        <Skills url={js} alt="javascript logo" title="Javascript" />
        <Skills url={reactbw} alt="react logo" title="React.js" />
        <Skills url={git} alt="git log" title="Git" />
        <Skills url={ps} alt="adobe photoshop logo" title="Adobe photoshop" />

        <p>
          Professional googler, fast learner and collector of memes.
          <br />
          Educated in art and been working retail for 10+ years. <br />
        </p>
        <h2>Contact:</h2>
        <ul>
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
            <Contact 
              url="https://www.facebook.com/kottla"  
              name="Facebook" />
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default About;
