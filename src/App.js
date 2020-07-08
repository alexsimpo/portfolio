import React from 'react';
import './App.css';
import Socials from './icons/socials';
import Typewriter from 'typewriter-effect';
import FadeInSection from './scripts/fade';
import Particles from 'react-tsparticles';

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
        <Particles id="tsparticles" params={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                speed: 5
              },
              push: {
                quantity: 2
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}/>
        <h1><FadeInSection>Hi there!</FadeInSection></h1>
      </div>

      <Socials />
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
