import React, { useEffect } from 'react'
import Rellax from 'rellax';

const Projects = () => {
    useEffect(() => {
        new Rellax(".rellax1", {
            speed: -1.25,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".rellax2", {
            speed: 1.5,
        });
        new Rellax(".rellax3", {
            speed: 0.75,
        })
    }, []);
    let rellax = new Rellax(".rellax");
    return (
        <div className="wrapper">

            <div className="project-with-shape">
                <div className="project">
                    <div className="project-details">
                        <h1 className="project-title">Work Spots KC</h1>
                        <p>The idea for this app is simple, where is a good place to work on projects besides home or the office? This searches through a database and gives locations of cool spots to work near the user. I built this app during the UMKC website building bootcamp. After building the project outlined in the book, we each got to build our own web app. This idea was chosen because of the relevance to me while in school, but also many others who work from home.</p>
                        <br /><br/>
                        <p>This is a full stack web application. The database is MongoDB modeled using Mongoose, the backend controller is built using Express, and the views are delivered through Angular. The link to the Github repository is <a className="github-links" href="https://github.com/Noah-Huff/my-work-spot">HERE</a>.</p>
                        <a href="https://work-spot-kc.herokuapp.com/"><div id="proj1" className="button3">See This Project</div></a>
                    </div>
                </div>
                <div className="cube-wrapper rellax1" >
                    <div className="cube"></div>
                </div>
            </div>


            <div className="project-with-shape">
                <div className="project">
                    <div className="project-details">
                        <h1 className="project-title">Blackjack</h1>
                        <p>This is a project from one of my classes. The requirement was a web app that required client side scripting. The inspiration for this project is partially from a Christmas party at a previous job where I learned Blackjack, and a coding challenge that I found online and wanted to tackle. I built this using Reactjs since I was hoping to learn more about the framework. This was a fun challenge that introduced me to the concept of state, and how to pass state down to other components!</p>
                        <a href="https://playblackjackgame.herokuapp.com/"><div id="proj2" className="button3">See This Project</div></a>
                    </div>
                </div>
                <div class="sphere-wrapper rellax2" >
                    <section class="stage">
                        <figure class="sphere">
                            <span class="shadow"></span>
                        </figure>
                    </section>
                </div>
            </div>


            <div className="project-with-shape">
                <div className="project">
                    <div className="project-details">
                        <h1 className="project-title">Sample Project</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus fugit laboriosam, eum repellat hic iusto aliquam in rerum error ab facilis asperiores est veritatis aspernatur magnam ea nesciunt eveniet? At natus, sunt doloremque accusamus ullam ducimus architecto ut quam quo modi qui dicta adipisci quasi. Architecto voluptatibus delectus facere non ut inventore reprehenderit animi, nostrum maxime nihil, repellat odio voluptatem eos veniam saepe ducimus quisquam recusandae illo accusantium, quos praesentium!</p>
                        <a href=""><div id="proj3" className="button3">See This Project</div></a>
                    </div>
                </div>
                <div class="pyramid-wrapper rellax3" >
                    <div class="pyramid"></div>
                </div>
            </div>





        </div>
    )
}

export default Projects
