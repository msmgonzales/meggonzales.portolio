import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import data from '../data/Projects'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
    const [index, setIndex] = useState(0);
    const [width] = useState(window.innerWidth);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const projects = data.map(project => {
        return (
            <Carousel.Item key={project.id} >
                <div className="project-container">
                    <div className="project-info">
                        <p>{project.description}</p>
                        
                        <div className="project-links">
                            <div className="d-grid gap-2 d-flex">
                                <button className="btn btn-outline-light btn-sm" type="button"><FontAwesomeIcon icon={faLink} /> View</button>
                                <button className="btn btn-outline-light btn-sm" type="button"><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                            </div>
                        </div>

                        <div className="project-title">
                            <p className="stack">{project.stack}</p>
                            <h1 className="text-uppercase fw-bolder">{project.title}</h1>
                        </div>
                    </div>
                    <div className="project-img">
                        
                        <img src={project.img} alt="mms" />
                    </div>
                </div>
            </Carousel.Item>
        )
    })

    return (
        <div id="projects">
            <div className="project-list">
                <h1 className="title">Projects.</h1>
                <p>{index+1} — {data.length}</p>
            </div>

            
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect}  
                touch={true}
                controls={ width <= 768 ? false : true}
                pause={"hover"}
            >
                {projects}
            </Carousel>
        </div>
    )
}

export default Projects