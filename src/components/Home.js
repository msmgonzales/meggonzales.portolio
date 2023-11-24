import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from "../img/megrg.jpg"

function Home() {
    const [expertise] = useTypewriter({
        words: ['Front-End Developer', 'Web Designer', 'Web Developer', 'Back-End Developer', 'Full Stack Developer'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 70
    })

    return (
        <div className="home" id="home">
            <img src={profile} className="my-profile" alt="meg gonzales" />
            <h5 className="name d-flex align-items-center"><span className="fs-1 me-2">•</span>i'm meg gonzales</h5>
            <h1 className="title fw-bolder">{expertise}<span><Cursor /></span></h1>
            <p className="introduction">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" className="portfolio-btn">Download Resume</button>
            
            <hr className="hr-text" data-content="<3" />
        </div>
    )
}

export default Home