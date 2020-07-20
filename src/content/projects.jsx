import React, { Component } from 'react';
import astype from '../images/astype.PNG';
import jammming from '../images/jammming.PNG';
import ravenous from '../images/ravenous.PNG';
import game from '../images/2048.PNG';
import Github from '../icons/github';
import FadeInSection from '../scripts/fade';
/* import peace from '../images/instagram/Peace.png';
import rabbit from '../images/instagram/Rabbithand.png';
import homer from '../images/instagram/Homer.png'; */

export default class Projects extends Component {
    render(){
        return (
            <div className="projects" id="project">
                <FadeInSection position="up">
                <h3>01</h3>
                <h2>projects</h2>
                {/* <h3 className="project-type" id="web">web</h3> */}
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
                    <a href="http://as-2048.surge.sh/" target="_blank" rel="noopener noreferrer" className="site-direct">
                    <div className="single">
                        <div className="links">
                        <Github source="https://github.com/alexsimpo/as-2048" />
                        </div>
                        <img src={game} alt="2048 game"></img>
                    </div>
                    </a>
                </div>
                </FadeInSection>
                {/* <h3 className="project-type" id="design">designs</h3>
                <div className="instagram-preview">
                    <div>
                        <a href="https://www.instagram.com/p/CCckuOLB6_o/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={peace} alt="peace"></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/p/CBXjBtNBR2J/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={rabbit} alt="rabbit"></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/p/CA6Tfh9BE0-/" target="_blank" rel="noopener noreferrer" className="site-direct">
                            <img src={homer} alt="homer"></img>
                        </a>
                    </div>
                </div> */}
            </div>
        );
    }
}