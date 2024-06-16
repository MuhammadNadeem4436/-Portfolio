import React from "react";
import Nadeem from "../assets/Nadeem.png"
import { BiColor } from "react-icons/bi";

const About = () =>{
    return(
        <>
            <div id="About" className="about">
                <h1 className="about-heading">About Me</h1>
                <div className="about-info">
                    <div className="about-img">
                        <div className="about-img-wrapper">
                            <img src={Nadeem} alt="Detective" />
                        </div>
                    </div>
                    <div className="about-desc">
                        <p> I am a software developer building web applications using <span className="spaText"> JAVASCRIPT</span> , <span className="spaText">REACT</span> , <span className="spaText">HTML</span> , <span className="spaText">CSS</span> and <span className="spaText">REDUX</span>. I have a passion for creating clean, efficient, and scalable code that delivers a great user experience. I enjoy contributing to open-source projects and experimenting with new technologies. If you’re looking for a skilled developer who is passionate about their work, please feel free to reach out to me.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;