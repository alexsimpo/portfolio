import React, { Component } from 'react';
import astype from '../images/astype.PNG';
import jammming from '../images/jammming.PNG';
import ravenous from '../images/ravenous.PNG';
import Github from '../icons/github';
import FadeInSection from '../scripts/fade';

export default class Projects extends Component {
    render(){
        return (
            <div className="projects" id="project">
                <FadeInSection position="up">
                <h3>01</h3>
                <h2>projects</h2>
                <h3 className="project-type" id="web">web</h3>
                <div className="preview">
                    <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                    <div className="single">
                        <div className="links">
                        <   Github source="https://github.com/alexsimpo/as-type" />
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
                <div className="instagram-preview">
                    <div>
                        <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={ravenous} alt="astype typing test"></img>
                        </a>
                    </div>
                    <div>
                        <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={ravenous} alt="astype typing test"></img>
                        </a>
                    </div>
                    <div>
                        <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={ravenous} alt="astype typing test"></img>
                        </a>
                    </div>
                    <div>
                        <a href="http://astype.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={ravenous} alt="astype typing test"></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}