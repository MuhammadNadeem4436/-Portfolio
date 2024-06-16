import React from "react";
import Data from "./Data.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../assets/project.jpg'

const Projects = () => {
    const settings = {
        dots: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div id='project' className='projects'>
            <div className="heading">
                <h2>WORKS</h2>
            </div>
                <div className="projects-container">
                    <Slider {...settings}>
                    {
                        Data.map((props, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img src={Image} alt="Project" />
                                        <h2 className="name">{props.name}</h2>
                                        <div>
                                            <p className="description">{props.review}</p>
                                            <a
                                            className="project-button"
                                            target="_blank"
                                            href={props.path}
                                            rel="noreferrer"
                                            >GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
        </div>
    )
}

export default Projects;