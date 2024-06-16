import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nadeem from '../assets/Nadeem.png'



const Body =() =>{
    return(
        <>
            <div id="body" className="body">
                <div className="body-container">
                    <div className="body-profile">
                        <img className="body-img" alt='avatar' src={Nadeem} />

                        <div className="body-content">
                            <div className="body-headline">Muhammad Nadeem Akram</div>
                            <div className="body-text">Software Engineer</div>
                        </div>
                        <div className="body-icons">
                            <a href="https://github.com/MuhammadNadeem4436" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                            <a href="https://www.linkedin.com/in/muhammad-nadeem-akram-156129273/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;


