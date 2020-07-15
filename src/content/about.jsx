import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import peace from '../images/peace.png';
import wave from '../images/wave.png';
import FadeInSection from '../scripts/fade';

export default class About extends Component {
    render(){
        return (
        <FadeInSection position="up">
          <h3>02</h3>
          <h2 id="about-header">about</h2>
          <div className="about">
              <div id="hand-images">
                <img id="wave" src={wave}></img>
                <img id="peace" src={peace}></img>
              </div>
              <div id="right-about">
                <h4 id="am-about">Hi, my name is</h4>
                <h5 id="name-about">Alex Simpson</h5>
                <h4 id="what-about">I am a</h4>
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
        );
    }
}