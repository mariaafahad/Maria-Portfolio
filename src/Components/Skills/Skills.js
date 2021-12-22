import React, { useState, useEffect } from 'react';
import Progress from './Progress';
import './Skill.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Skill = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    const allSkill = [
        { id: "01", skillType: 'web', skill: "React", expertLevel: 90 },
        { id: "02", skillType: 'web', skill: "Node.JS", expertLevel: 65 },
        { id: "03", skillType: 'web', skill: "Express.JS", expertLevel: 50 },
        { id: "04", skillType: 'web', skill: "MongoDB", expertLevel: 90 },
        { id: "05", skillType: 'web', skill: "Meterial-UI", expertLevel: 80 },
        { id: "06", skillType: 'web', skill: "Bootstrap", expertLevel: 95 },
        { id: "07", skillType: 'web', skill: "CSS", expertLevel: 95 },
        { id: "08", skillType: 'web', skill: "HTML", expertLevel: 95 },
        { id: "09", skillType: 'programming', skill: "JavaScript", expertLevel: 90 },
        { id: "10", skillType: 'tools', skill: "GitHub", expertLevel: 95 },
        { id: "11", skillType: 'tools', skill: "Web Pack", expertLevel: 90 },
        { id: "12", skillType: 'tools', skill: "VSCode", expertLevel: 95 },
        { id: "13", skillType: 'tools', skill: "Dev Tool", expertLevel: 90 },
        { id: "14", skillType: 'tools', skill: "Figma", expertLevel: 85 },
        { id: "15", skillType: 'tools', skill: "TailwindCSS", expertLevel: 95 },

    ];

    const [getSkill, setGetSkill] = useState([]);
    const [webStyle, setWebStyle] = useState(true);
    const [progStyle, setProgStyle] = useState(false);
    const [toolsStyle, setToolsStyle] = useState(false);


    useEffect(() => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

    }, [])


    const handleWeb = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'web');
        setGetSkill(specificSkill);

        setWebStyle(true);
        setProgStyle(false);
        setToolsStyle(false);

    }

    const handleProgramming = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'programming');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(true);
        setToolsStyle(false);
    }

    const handleTools = () => {
        const specificSkill = allSkill.filter(skill => skill.skillType === 'tools');
        setGetSkill(specificSkill);

        setWebStyle(false);
        setProgStyle(false);
        setToolsStyle(true);
    }

    return (

        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" id="skill-section" className="px-40 skill">


            <p className="d-flex align-items-center text-4xl text-blue-200">My Skills</p>


            <button onClick={handleWeb} className={webStyle ? "btn btn-success my-2 my-sm-0 btn-style text-blue-400" : "btn btn-outline-success my-2 my-sm-0 btn-style text-white"} >Web</button>
            <br />
            <button onClick={handleProgramming} className={progStyle ? "btn btn-success my-2 my-sm-0 btn-style text-blue-400" : "btn btn-outline-success my-2 my-sm-0 btn-style text-white"}>Programming</button>
            <br />
            <button onClick={handleTools} className={toolsStyle ? "btn btn-success my-2 my-sm-0 btn-style text-blue-400" : "btn btn-outline-success my-2 my-sm-0 btn-style text-white"}>Tools</button>

            <div className="row">
                {
                    getSkill.map(skill => <Progress key={skill.id} done={skill.expertLevel} title={skill.skill}></Progress>)
                }
            </div>
        </div>
    );
};

export default Skill;