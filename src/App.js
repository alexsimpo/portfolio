import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from './scripts/particles';
import Projects from './content/projects';
import Scroll from './scripts/scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import peace from './images/peace.png';
import wave from './images/wave.png';

function App() {
  return (
    <div className="App">
      <div id="header-bg"></div>
      <header>
        <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-110}
            duration= {500}>
          <h1>A // S</h1>
          </Link>
        <ul className="navbar">
          <li>
            <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration= {500}>
            projects</Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="ab"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            about</Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="ct"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
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

      <Scroll />
      
      <Socials />
      <main>
        <Projects />
        <div id="ab"></div>
        <FadeInSection position="up">
          <div className="about">
              <h3>02</h3>
              <h2>about</h2>
              <div id="hand-images">
                <img id="wave" src={wave}></img>
                <img id="peace" src={peace}></img>
              </div>
              <div id="right-about">
                <h5 id="name-about">Alex Simpson</h5>
                <h4 id="am-about">I am a</h4>
                <h1 id="about-typewriter"><Typewriter 
                options={{ loop: true, delay: 75 }}
                onInit={(typewriter) => {
                typewriter
                .typeString('<span style="color: #f0e4a4">Web Developer</span>').pauseFor(1200)
                .deleteAll().typeString('<span style="color: #e91e63">Digital Illustrator</span>').pauseFor(1200)
                .deleteAll().typeString('<span style="color: #26D480">Programmer</span>').pauseFor(1200)
                .deleteAll().typeString('<span style="color: #97B9EB">UX Designer</span>').pauseFor(1200)
                .start();
                }}
              /></h1>
            </div>
          </div>
        </FadeInSection>

        <div className="ct"></div>
          <div className="contact">
            <FadeInSection position="up">
            <h3>03</h3>
            <h2>contact</h2>

            </FadeInSection>
          </div>
      </main>

      <footer>
        <span id="c">&#169; copyright your mum</span>
        <span id="b"><Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-110}
            duration= {500}>
            back to the top</Link></span>
      </footer>
    </div>
  );
}

export default App;
