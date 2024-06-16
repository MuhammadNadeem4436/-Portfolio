import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";

const Skill = () =>{
    return(
        <>
            <div id="skill" className="skill">
                <div className="skill-container">
                        <h1 className="main-heading">Skill</h1>
                    <div className="skill-content">
                        {
                            Skill_list.map(
                                (props) =>{
                                    return(
                                        <div className="skill-info">
                                            <h1 className="skill-img">{props.image}</h1>
                                            <h3 className="skill-heading">{props.name}</h3>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;

const Skill_list = [
    {
        name : "JS",
        image : <TbBrandJavascript />
    },
    {
        name : "HTML",
        image : <ImHtmlFive />
    },
    {
        name : "CSS",
        image : <FaCss3Alt />
    },
    {
        name : "REACT",
        image : <FaReact />
    },
    {
        name : "REDUX",
        image : <TbBrandRedux />
    },
]