import React from "react"
import data  from '../data/Skills'


function About() {
    const skillSet = data.map(skill => {
        return (
            <div className="skill" key={skill.id}>
                <img 
                    src={skill.logo}
                    alt={skill.name + " LOGO"} 
                />
                <p className="fw-bolder">{skill.name}</p>
            </div>
        )
    })

    return (
        <div id="about">
            <h1 className="title fw-bolder">Overview.</h1>
            <div className="about-container">
                <div className="overview">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Sit amet commodo nulla facilisi nullam vehicula ipsum. Tempus egestas sed sed risus pretium. 
                    </p>
                    <p>
                        Volutpat ac tincidunt vitae semper. Ultricies tristique nulla aliquet enim tortor at auctor. Vulputate ut pharetra sit amet. Ut lectus arcu bibendum at varius vel pharetra. Nulla pharetra diam sit amet nisl suscipit adipiscing. 
                        <br /><br />
                        <a href="/" className="fw-bolder text-decoration-underline link-light">Download CV</a>
                    </p>
                </div>
                <h5 className="text-uppercase fw-semibold mb-4 d-flex align-items-center"><span className="fs-1 me-2">•</span>skills</h5>
                <div className="skillset">
                    {skillSet}
                </div>
            </div>
        </div>
    )
}

export default About