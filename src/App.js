import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>alexSimpson..</h1>
        <ul>
          <li class="active"><a>projects</a></li>
          <li><a>about</a></li>
          <li><a>contact</a></li>
        </ul>
      </header>
      <socials>
          <div></div>
          <div></div>
          <div></div>
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
