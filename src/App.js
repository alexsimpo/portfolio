import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from './scripts/particles';
import Github from './icons/github';

import astype from './images/astype.PNG';

function App() {
  return (
    <div className="App">
      <header>
        <h1><Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('A // S')
              .start();
            }}
          />
          </h1>
        <ul>
          <li className="active"><a>projects</a></li>
          <li><a>about</a></li>
          <li><a>contact</a></li>
        </ul>
      </header>
      
      
      <div class="intro">
        <Particles />
        <h1><FadeInSection>Hi there!</FadeInSection></h1>
      </div>

      <Socials />
      <main>
        <div className="projects">
          <FadeInSection>
          <h2>01 .projects</h2>
          </FadeInSection>
          <FadeInSection>
          <div className="preview">
            <div>
              <img src={astype} alt="astype typing test"></img>
              <div className="links">
                <Github source="https://github.com/alexsimpo/as-type" />
              </div>
            </div>
            <div><img src={astype} alt="astype typing test"></img></div>
            <div><img src={astype} alt="astype typing test"></img></div>
            <div><img src={astype} alt="astype typing test"></img></div>
          </div>
          </FadeInSection>
        </div>
      </main>

      <footer>
        <span id="c">&#169; copyright your mum</span>
        <span id="b">back to the top</span>
      </footer>
    </div>
  );
}

export default App;
