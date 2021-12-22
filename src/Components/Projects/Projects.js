import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    //     https://i.ibb.co/ThRB5Cc/Screenshot-34.png
    // https://i.ibb.co/SX2Tdfn/Screenshot-35.png
    // https://i.ibb.co/pdwkbh8/Screenshot-37.png
    // https://i.ibb.co/RHzS66T/Screenshot-33.png

    const projects = [
        {
            id: 1,
            image: "https://i.ibb.co/RHzS66T/Screenshot-33.png",
            name: "Fragrance-Universe",
            link: "https://fragrance-universe.netlify.app/",
            github: "https://github.com/mariaafahad/fragrance-universe-website"

        },
        {
            id: 2,
            image: " https://i.ibb.co/ThRB5Cc/Screenshot-34.png",
            name: "Order For Food",
            link: "https://nervous-pare-ebe53d.netlify.app/",
            github: "https://github.com/mariaafahad/order-for-foodie"

        },
        {
            id: 3,
            image: "https://i.ibb.co/SX2Tdfn/Screenshot-35.png",
            name: "Study-Code",
            link: "https://dreamy-perlman-27a7f0.netlify.app/",
            github: " https://github.com/mariaafahad/study-code-web"

        },
        {
            id: 4,
            image: "https://i.ibb.co/pdwkbh8/Screenshot-37.png",
            name: "Healt Care Hospital",
            link: "https://fragrance-universe.netlify.app/",
            github: "https://github.com/mariaafahad/healthcare-website"

        }
    ]
    return (
        <div id="projects" className="pt-12 mt-72">
            <section className="text-gray-400 bg-gray-900 body-font md:flex-shrink-0 w-full md:w-full sm:min-w-0">
                <div className="container px-5 py-4 mx-auto text-center lg:px-40">
                    <div data-aos="zoom-in-up" className="flex flex-col md:flex-shrink-0 w-full md:w-full sm:min-w-0 mb-20">

                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Apps I've Built
                        </h1>
                        <h3 className="lg:w-2/3 mx-auto leading-relaxed font-medium text-white">
                            This are the Projects I've Built.Cliking image you can see the Live site.
                        </h3>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {projects.map((project) => (
                            <a data-aos="zoom-in"
                                href={project.link}
                                key={project.id}
                                className="sm:w-1/2 w-100 h-100 p-4">
                                <div className="flex relative ">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 items-center justify-center ">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            Project Name

                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.name}
                                        </h1>
                                        <Link to={`/details/${project.id}`}><button class="bg-indigo-300 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-indigo-600 rounded-full hover:shadow-2xl hover:bg-indigo-400">More Details</button></Link>


                                        {/* <p className="leading-relaxed">{project.description}</p> */}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Projects;