import React from 'react';
import './App.css';
import Instagram from './icons/instagram';
import Github from './icons/github';
import LinkedIn from './icons/linkedin';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <header>
        <h1><Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('alexSimpson')
              .start();
            }}
          />
          </h1>
        <ul>
          <li class="active"><a>projects</a></li>
          <li><a>about</a></li>
          <li><a>contact</a></li>
        </ul>
      </header>
      <socials>
          <div><Instagram /></div>
          <div><Github /></div>
          <div><LinkedIn /></div>
      </socials>
      <main>
        <div class="preview active"></div>
        <div class="small preview">        
          <div class="preview" id="top"></div>
          <div class="preview"></div>
        </div>
        <p>this is the main</p>
      </main>

      <footer>this is the footer

      </footer>
    </div>
  );
}

export default App;
