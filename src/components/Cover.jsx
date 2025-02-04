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
                I'm a dedicated Full-Stack Developer with 8 years of experience building robust
                and user-friendly applications. My passion lies in creating responsive and intuitive
                Single Page Applications (SPAs) using modern tools like React, Redux, and Tailwind
                CSS. With a strong command of both frontend and backend technologies, I specialize in
                designing RESTful APIs with Node.js and Express.js, managing databases like MongoDB
                and PostgreSQL, and optimizing application performance through techniques like lazy
                loading and code splitting.
            </p>

            <p>
                My professional journey includes impactful roles at Meta, the Association of American
                Medical Colleges, and the King County Housing Authority, where I've developed scalable,
                efficient solutions to enhance user experience and functionality. Whether it's integrating
                AI-driven features, creating custom dashboards, or implementing secure data management
                systems, I thrive on solving complex challenges with creative and practical solutions.
            </p>

            <p>
                Beyond coding, I'm passionate about seamless UI/UX integration, collaborating with
                cross-functional teams, and continuously refining my skills to stay ahead in the
                ever-evolving tech landscape. Let's connect and create something amazing!
            </p>

            <button className='contact-button' onClick={() => {setPopupOpen(true)}}>Contact Me</button>
            {
                popupOpen && <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
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