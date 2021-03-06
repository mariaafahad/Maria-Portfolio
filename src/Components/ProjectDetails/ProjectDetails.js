import React, { useEffect } from 'react';
import Navbar from '../Header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetails = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    //     h
    //     https://i.ibb.co/DVrL8rj/hsptl-2.png
    // https://i.ibb.co/SwxXsjJ/hsptl-3.png
    // https://i.ibb.co/vPMcffD/frag-3.png
    // https://i.ibb.co/ZYwK0wq/food-2.png
    // https://i.ibb.co/qkzcn82/food-3.png
    // https://i.ibb.co/FWphPgx/frag-2.png
    const details = [
        {

            name: "Fragrance Universe",
            technology: "React, JavaScript, TailwindCSS, Firebase Authentication, NodeJs, ExpressJs, MongoDB, Heroku. ",
            img: "https://i.ibb.co/RHzS66T/Screenshot-33.png",
            gitlink: "https://github.com/mariaafahad/fragrance-universe-website",
            livelink: "https://fragrance-universe.netlify.app/"


        },

        {

            name: "Study-Code",
            technology: "React, JavaScript, TailwindCSS, Firebase Authentication, NodeJs, ExpressJs, MongoDB, Heroku. ",
            img: "https://i.ibb.co/SX2Tdfn/Screenshot-35.png",
            gitlink: "https://github.com/mariaafahad/study-code-web",
            livelink: "https://dreamy-perlman-27a7f0.netlify.app/"


        },

    ]
    return (

        <div>
            <Navbar></Navbar>
            <section class="relative pt-12 m-8 bg-blueGray-50 ">
                <div class="items-center flex flex-wrap text-gray-100 " data-aos="zoom-in-up">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://i.ibb.co/RHzS66T/Screenshot-33.png" />
                    </div>
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">

                            <h3 class="text-3xl font-semibold">Project Name: <span className="text-yellow-900">Fragrance Universe</span></h3>
                            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                                This Website is Fragrance products selling website.
                            </p>
                            <ul class="list-none mt-6">
                                <li class="py-2">
                                    <div class="flex items-center">

                                        <div>
                                            <h4 class="text-blueGray-500">
                                                Responsive MERN Stack project with firebase authentication, admin authentication,
                                                persistent login, and dashboard functionality for users and admin.
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500">Logged in users will see a button named "Dashboard", where they can view the booked
                                                list which they have requested. If the logged in user is an Admin, they will be having a
                                                coupe of extra features called "Add Product" & ???Make Admin???.</h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500">Dynamic Dashboard</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section class="relative pt-12 m-8 bg-blueGray-50">
                <div class="items-center flex flex-wrap text-gray-100" data-aos="zoom-in-up">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://i.ibb.co/FWphPgx/frag-2.png" />
                    </div>
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">

                            <h3 class="text-3xl font-semibold">Section Name: <span className="text-yellow-900">Products Name</span></h3>
                            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                                You can order any product by clicking on.
                            </p>
                            <ul class="list-none mt-6">
                                <li class="py-2">
                                    <div class="flex items-center">

                                        <div>
                                            <h4 class="text-blueGray-500">
                                                You need to logged in if you want to buy any product.
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500">Users can see their own dashboard.</h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500">User can give a review after purchase.</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section class="relative pt-12 m-8 bg-blueGray-50">
                <div class="items-center flex flex-wrap text-gray-100" data-aos="zoom-in-up">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://i.ibb.co/vPMcffD/frag-3.png" />
                    </div>
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">

                            <h3 class="text-3xl font-semibold">Section Name: <span className="text-yellow-900">Login Section</span></h3>
                            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                                If users want to buy any product they will redirect to this page for login.
                            </p>
                            <ul class="list-none mt-6">
                                <li class="py-2">
                                    <div class="flex items-center">

                                        <div>
                                            <h4 class="text-blueGray-500">
                                                The live link, GitHub link is given below :
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500 "> Livelink:<a className="underline" href="https://fragrance-universe.netlify.app/"> "https://fragrance-universe.netlify.app/"</a></h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-yellow-500 mr-3"><i class="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500"> GitHub link:<a className="underline" href="https://github.com/mariaafahad/fragrance-universe-website"> "https://github.com/mariaafahad/fragrance-universe-website"</a></h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>



        </div>


    );
};

export default ProjectDetails;