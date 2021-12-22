import React from 'react';
import AboutMe from '../../About Me/AboutMe';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import Banner from '../Banner';
import Navbar from '../Navbar';
import ScrollToTop from "react-scroll-to-top";



const Header = () => {
    return (
        <div className="text-center">

            <Navbar></Navbar>

            <Banner></Banner>
            {/* <AboutMe></AboutMe> */}
            <Projects ></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <Blog></Blog>
            <ScrollToTop smooth style={{ padding: '10px' }} />
            <Footer></Footer>
        </div>
    );
};

export default Header;