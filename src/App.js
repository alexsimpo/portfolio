import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from './scripts/particles';
import Github from './icons/github';
import Scroll from './scripts/scroll';

import astype from './images/astype.PNG';
import jammming from './images/jammming.PNG';
import ravenous from './images/ravenous.PNG';

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
          <li className="active"><a className="nav">projects</a></li>
          <li><a className="nav">about</a></li>
          <li><a className="nav">contact</a></li>
        </ul>
      </header>
      
      <Scroll />
      
      <div class="intro">
        <Particles />
        <h1><FadeInSection>Welcome</FadeInSection></h1>
      </div>

      <Socials />
      <main>
        <div className="projects">
          <FadeInSection>
          <h2>01 .projects</h2>
          <div className="preview">
            <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
              <div className="single">
                <div className="links">
                  <Github source="https://github.com/alexsimpo/as-type" />
                </div>
                <img src={astype} alt="astype typing test"></img>
              </div>
            </a>
            <a href="https://jammming-proj.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
              <div className="single">
                <div className="links">
                  <Github source="https://github.com/alexsimpo/jammming" />
                </div>
                <img src={jammming} alt="jammming music playlists"></img>
              </div>
            </a>
            <a href="https://alexsimpo.github.io/ravenous/" target="_blank" rel="noopener noreferrer" className="site-direct">
              <div className="single">
                <div className="links">
                  <Github source="https://github.com/alexsimpo/ravenous" />
                </div>
                <img src={ravenous} alt="astype typing test"></img>
              </div>
            </a>
            <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
              <div className="single">
                <div className="links">
                  <Github source="https://github.com/alexsimpo/as-type" />
                </div>
                <img src={astype} alt="astype typing test"></img>
              </div>
            </a>
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
