import React, { useEffect } from 'react'
import Rellax from 'rellax';
import githubLogo from '../public/githubLogo.svg';
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <div className="projects-wrapper">
            <div className="text-card">
                <h1 className="project-title">Work Spots KC</h1>
                <p>The idea for this app is simple, where is a good place to work on projects besides home or the office? This searches through a database and gives locations of cool spots to work near the user. I built this app during the UMKC website building bootcamp. After building the project outlined in the book, we each got to build our own web app. This idea was chosen because of the relevance to me while in school, but also many others who work from home.</p>
                <br />
                <p>This is a full stack web application. The database is MongoDB modeled using Mongoose, the backend controller is built using Express, and the views are delivered through Angular. The link to the Github repository is <a className="github-links" href="https://github.com/Noah-Huff/my-work-spot">HERE</a>.</p>
                <a href="https://work-spot-kc.herokuapp.com/"><div className="button">See This Project</div></a>

            </div>

            <div className="text-card">
                <h1 className="project-title">Blackjack</h1>
                <p>This is a project from one of my classes. The requirement was a web app that required client side scripting. The inspiration for this project is partially from a Christmas party at a previous job where I learned Blackjack, and a coding challenge that I found online and wanted to tackle. I built this using Reactjs since I was hoping to learn more about the framework. This was a fun challenge that introduced me to the concept of state, and how to pass state down to other components!</p>
                <br />
                <p>You can see the code on Github <a className="github-links" href="https://github.com/Noah-Huff/blackjack-REACT-project">HERE</a>.</p>
                <a href="https://playblackjackgame.herokuapp.com/"><div className="button">See This Project</div></a>
            </div>

            <div className="text-card">
                <h1 className="project-title">This Portfolio Site</h1>
                <p>In order to become more familiar with the technology, I used React.js for this website. I decided to explore creating an SVG and adding parallax effects for the homepage. After drewing the background picture, I used a library called Rellax.js to add different scrolling speeds to each layer on the SVG image. In order to have a contact page, I added a very minimal backend that sends an email to my gmail on successful submission by the user. Be sure to check out the source code on Github!</p>
                <a href="https://github.com/Noah-Huff/portfolio"><div className="button">Github Code</div></a>
            </div>

            <div className="text-card">
                <h1 className="project-title">Github<Link to={'https://github.com/Noah-Huff'}><img id="github-svg" src={githubLogo}></img></Link></h1>
                <p>Here you can find a few more projects I've worked on. From figuring out a few UNIX system calls, to building a couple full stack we applications, here you can see a glimpse into my programming interests!</p>
                <a href="https://github.com/Noah-Huff/"><div className="button">See My Github</div></a>
            </div>

        </div>
    )
}

export default Projects
