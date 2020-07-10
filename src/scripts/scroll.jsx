import React, { Component } from 'react';

export default class Scroll extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrolled: 0
      };
    }
  
    componentDidMount() {
      window.addEventListener("scroll", this.scrollProgress);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollProgress);
    }
  
    scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${scrollPx / winHeightPx * 100}%`;
  
      console.log(scrolled);
  
      this.setState({
        scrolled: scrolled
      });
    };
  
    render() {
      const progressContainerStyle = {
        background: "whitesmoke",
        height: "5px",
        position: "fixed",
        bottom: "100px",
        right: 0,
        transform: "rotateZ(90deg)",
        width: "100px",
        zIndex: 101
      };
  
      const progressBarStyle = {
        height: "5px",
        background: "#e91e63",
        width: this.state.scrolled
      };
  
      return (
          <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div>
      );
    }
}
