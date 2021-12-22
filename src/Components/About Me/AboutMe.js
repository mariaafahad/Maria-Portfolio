import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Navbar from '../Header/Navbar';



const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <><Navbar></Navbar>
            <div data-aos="flip-down" id="about" className="container p-11 animate__fadeInDown bg-gray-900 text-white md-container sm-container mt-60  mx-auto">

                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">About Me</h1>
                <h1 className="animate-bounce text-3xl"> Hello There!!!!</h1>
                <h4 className="text-xl" data-aos="fade-left">I'm Maria Kamal, I am an ambitious problem solver with a passion for online businesses, and who would like to join a team of like-minded developers. I have much experience of creating logical and innovative solutions to complex problems. I am thorough and precise in everything I do, and I have a keen interest in technology and user experience. As someone who takes responsibility for my own personal development, I am continually evaluating and upgrading my skills so that I can stay at the cutting edge of web development. I am a natural problem solver, who has proven myself by successfully completing projects for IT consultancies, software houses, web design agencies, and IT departments.</h4><br />
                <h4 className="text-xl" data-aos="fade-left">I specialize in creating sites for individuals and small businesses. You shouldn’t have to settle for cheap solutions or generic templates. I provide custom designs at afforable prices. Frequently your website is the first impression your customers will get, so make sure it’s a good one. Since my time is split between a few different things, I’m not able to take on every project I’d like to, but I'm always looking for fun work. Take a look at my portfolio below, if you think I’d be a good match send me an email.</h4>
                <br />
                <div className="flex justify-start">
                    <a className="card-footer text-4xl items-center justify-center" href="https://github.com/mariaafahad"><FaGithubSquare /></a>
                    <a className="card-footer text-4xl items-center justify-center mx-10" href="https://www.linkedin.com/in/maria-kamal-1b3905216/"><BsLinkedin /></a>

                </div>


            </div>
        </>
    );
};

export default AboutMe;