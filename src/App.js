import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from './scripts/particles';
import Projects from './content/projects';
import About from './content/about';
import Scroll from './scripts/scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import map from './images/map.PNG';

function App() {
  return (
    <div className="App">
      <div id="header-bg"></div>
      <ReactCSSTransitionGroup transitionName="header" transitionAppear={true}
      transitionAppearTimeout={1500}>
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
      </ReactCSSTransitionGroup>
      
      <ReactCSSTransitionGroup transitionName="scroll" transitionAppear={true}
      transitionAppearTimeout={1500}>
        <Scroll />
      </ReactCSSTransitionGroup>
      
      <ReactCSSTransitionGroup transitionName="side" transitionAppear={true}
      transitionAppearTimeout={1500}>
        <div id="fixed-small">
        <Socials />
        </div>
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup
      transitionName="page" transitionAppear={true}
      transitionAppearTimeout={2500}>
      <div className="intro">
        <Particles />
        <h1><Typewriter
            onInit={(typewriter) => {
              typewriter.
              pauseFor(2800)
              .typeString('Welcome')
              .start();
            }}
          /></h1>
      </div>

      <main>
        <Projects />

        <div id="ab"></div>
        <About />

        <div className="ct"></div>
        <FadeInSection position="up">
          <h3>03</h3>
          <h2>contact</h2>
          <div className="contact">
              <div id="left-contact">
                <h4 id="chat-contact">Chat with me at</h4>
                <h5 id="email-contact"><a href="mailto: alxsimpson@gmail.com">alxsimpson@gmail.com</a></h5>
                <h4 id="socials-contact">or on any of my socials</h4>
                <Socials />
              </div>
              <div id="map">
                <h6>Found in Brisbane, Australia</h6>
                <img src={map} alt="map"></img>
              </div>
          </div>
        </FadeInSection>
      </main>

      <footer>
        <span id="c">&#169; copyright 2020</span>
        <span id="b"><Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-110}
            duration= {500}>
            back to the top</Link></span>
      </footer>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default App;
