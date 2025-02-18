import { useState } from 'react';

import YellowBackground from '../assets/yellow.png';
import PurpleBackground from '../assets/purple.png';
import Photo from '../assets/photo.png';

function Cover() {
    const [popupOpen, setPopupOpen] = useState(false);

    return <div className='cover'>
        <img src={YellowBackground} name='yellow-background' className='yellow-background'/>

        <div className='header'>
            <a href='https://github.com/byc233-1664304'>Github</a>
            <span>|</span>
            <a href='#skills'>Skills</a>
            <span>|</span>
            <a href='#work-experience'>Work Experience</a>
            <span>|</span>
            <a href='#contact'>Contact Me</a>
        </div>

        <h1 className='hi'>Hi, I'm Kathy...</h1>

        <div className='about'>
            <h2>About Me</h2>
            <p>
                I'm a <strong>Full-Stack Software Developer</strong> with <strong>8 years of experience</strong> 
                building scalable, hight-performance applications that enhance user experience and drive impactful 
                decision-making. My expertise lies in <strong>React, Redux, Node.js, and MongoDB</strong>, crafting 
                responsive, data-driven solutions for complex challenges.
            </p>

            <p>
               At <strong>Two Six Technologies</strong>, I develop mission-critical applications that leverage 
               <strong>real-time data visualization, geospatial mapping, and automation</strong> to support security and 
               defense operations. I specialize in transforming Figma wireframes into <strong>dynamic, interactive interfaces</strong> 
               using <strong>React, Material UI, and WebSockets</strong>. My work optimizes 
               <strong>state management, API integrations, and performance</strong> to ensure seamless data flow and real-time 
               responsiveness.
            </p>

            <p>
                Previously, at <strong>AAMC</strong> amnd <strong>King County Housing Authority</strong>, I designed 
                <strong>custom dashboards, filtering systems, and notification features</strong>, improving data accessibility 
                for medical researchers and housing authorities. My background in 
                <strong>RESTful API development, WebSockets, and security best practices</strong> enables me to build applications 
                that are both <strong>efficient and secure</strong>.
            </p>

            <p>
                Beyond coding, I'm a firm believer in <strong>collaboration, best practices, and continuous learning</strong>.
                Whether it's <strong>mentoring teams, optimizing performance, or architecting scalable microservice</strong>, 
                I thrive in fast-paced environments where innovation meets impact.
            </p>

            <p>I'm always open to <strong>new challenges and exciting opportunities</strong>. Let's build something great together!</p>

            <button className='contact-button' onClick={() => {setPopupOpen(true)}}>Contact Me</button>
            
            {
                popupOpen &&  <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
                    <div className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>email: {import.meta.env.VITE_MY_EMAIL}</div>
                        <div>phone: {import.meta.env.VITE_MY_NUMBER}</div>
                    </div>
                </div>
            }
        </div>

        <img src={Photo} name='photo' className='photo'/>
        <img src={PurpleBackground} name='purple-background' className='purple-background'/>
    </div>;
}

export default Cover;