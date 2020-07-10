import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from './scripts/particles';
import Projects from './content/projects';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <header>
        <h1>A // S
          </h1>
        <ul className="navbar">
          <li>
            <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration= {500}>
            projects</Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {200}>
            about</Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {200}>
            contact</Link>
          </li>
        </ul>
      </header>
      
      <div class="intro">
        <Particles />
        <h1><Typewriter
            onInit={(typewriter) => {
              typewriter.
              pauseFor(1000)
              .typeString('Hi, My Name Is Alex.')
              .start();
            }}
          /></h1>
      </div>

      <Socials />
      <main>
        <Projects />
      </main>

      <footer>
        <span id="c">&#169; copyright your mum</span>
        <span id="b">back to the top</span>
      </footer>
    </div>
  );
}

export default App;
