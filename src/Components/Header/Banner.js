import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypeWriterEffect from 'react-typewriter-effect';
import ParticleBackgroud from '../../Particle/ParticleBackgroud';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 7000
        });
    }, []);
    return (
        <>

            <div id="banner" class="h-full flex  items-center px-6 lg:px-32  text-gray-700 relative p-8">

                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="3000" class="w-full md:w-9/12 xl:w-8/12 text-left"
                >

                    <span data-aos="fade-up " class="animate__zoomIn font-bold uppercase tracking-widest">Hello, I'm</span>
                    <h1 data-aos="fade-right" class="text-3xl lg:text-7xl font-bold text-gray-900">
                        Maria Kamal
                    </h1>


                    <div className="content-center my-2" >
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: 'black',
                                fontWeight: 600,
                                fontSize: '2.5em',
                            }}
                            startDelay={100}
                            cursorColor="#3F3D56"
                            multiText={[
                                'A self taught Developer',
                                'A Mother',
                                'A Homeopathy Doctor',
                                'A Designer',
                                'And a Teacher',
                            ]}
                            multiTextDelay={2000}
                            typeSpeed={40}

                        />

                        <div className="my-3">
                            <a href="https://drive.google.com/file/d/1RWbvBVou2V4ePK43MAAZpdzFUm0lefv8/view?usp=sharing" target="_blank" className="btn  border-2 border-light-blue-500 rounded-full py-3 px-4  hover:bg-blue-600 sm:w-0 transition ease-in duration-700" download>See My Resume
                            </a>
                        </div>


                    </div>

                </div>

                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="5000">
                    <img className="rounded-full w-80 h-80 border-2 border-indigo-200" src="https://i.ibb.co/188xVWN/261024617-1335226813579866-4314340769251562840-n.jpg" data-aos="flip-left" alt="" />
                </div>

            </div >
        </>
    );
};

export default Banner;