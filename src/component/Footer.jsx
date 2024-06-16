import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () =>{
    return(
        <>
            <div className="footer">
                <section className="contect-info">
                    <h1 className="footer-headding">CONTACT WITH ME</h1>
                    <p className="footer-p">Email 💌 : nadeemakram4436@gmail.com </p>
                    <p className="footer-p">Mobile 📴 : 0309-4436995 | 0302-1436596</p>
                </section>
                <section className="social-link">
                    <h1 className="footer-headding">SOCIAL LINKS</h1>
                    <div className="icons">
                       <li><a href="https://www.linkedin.com/in/muhammad-nadeem-akram-156129273/"><FaLinkedin /></a></li>
                       <li><a href="https://github.com/MuhammadNadeem4436"><FaGithub /></a></li>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Footer