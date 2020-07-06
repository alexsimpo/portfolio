import React from 'react';
import './App.css';
import Instagram from './icons/instagram';
import Github from './icons/github';
import LinkedIn from './icons/linkedin';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';

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
      <div className="socials">
          <div><Github /></div>
          <div><LinkedIn /></div>
          <div><Instagram /></div>
      </div>
      <main>
        <FadeInSection>
        <div className="large-preview">
          <div className="tag"><h2>.projects</h2></div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="small-preview">        
          <div id="left"></div>
          <div id="middle"></div>
          <div id="right"></div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="small-preview">        
          <div id="left"></div>
          <div id="middle"></div>
          <div id="right"></div>
        </div>
        </FadeInSection>
      </main>

      <footer>
        <span id="c">&#169; copyright your mum</span>
        <span id="b">back to the top</span>
      </footer>
    </div>
  );
}

export default App;
