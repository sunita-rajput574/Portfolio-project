import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About=()=>{
    return(
        <div id="about" className="about">
           <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
           </div>
           <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am  fresher in Frontend Developer with over a decade of professional expertise in these fields.Throughout my career i have had the privilege of collaborating with prestigious organization contributing to their growth</p>
                    <p>My passion for frontend development is not only reflected in my extensive expirience but also in the enthusiasm and dedication i bring to each project</p>
                
                </div>
                <div className="about-skills">
                <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React.js</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Figma</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    </div>
            </div>
           </div>
           <div className="about-achievements">
            <div className="about-achievement">
                <h1>20+</h1>
                <p>SELF PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>SELF SATISFIED</p>
            </div>
            <hr />
           </div>
        </div>

    )
}
export default About