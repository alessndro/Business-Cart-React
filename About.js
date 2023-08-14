import React from 'react';

function About()
{
    return (
        <div className="about-div">
            <div className="top-about-div">
                <h4>Alessndro</h4>
                <a className="btn btn-coffee" href="mailto:email@email.nl">Grab A Coffee</a>
            </div>
            <div className="mid-about-div">
                <img className="profile-img" src="/Linkedin-pf.jpeg" />
                <div className="profile-text">
                    <h2>Alessandro Degenkamp</h2>
                    <p>To be Front-end Developer</p>
                </div>
            </div>
            <div className="button-wrapper">
                <a className="btn btn-secondary btn-large" href="mailto:email@email.nl">Email</a>
                <a className="btn btn-primary" href="https://www.linkedin.com/in/alessandro-degenkamp-390a231b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

export default About


// <button className="btn btn-secondary">Email</button>