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
                I'm a passionate <strong>Full-Stack Software Developer</strong> with <strong>8 years of experience</strong> 
                specializing in <strong>React</strong> and <strong>React Native</strong> application development. I 
                thrive on building responsive, high-performance web and mobile applications, leveraging modern technologies 
                to create seamless user experiences.
            </p>

            <p>
               With a strong foundation in <strong>JavaScript, TypeScript, and Node.js</strong>, I have expertise in developing 
               <strong>scalable front-end architectures</strong>, optimizing web performance, and implementing secure, efficient 
               <strong>RESTful APIs</strong>. My experience spans across industries, from <strong>cyber defense</strong> to 
               <strong>medical research</strong> and <strong>public service</strong>, where I've contributed to mission-critical 
               applications.
            </p>

            <p>
                I excel at designing <strong>intuitive UIs</strong> using <strong>Material UI, Tailwind CSS, and SASS</strong>, 
                ensuring accessibility and consistency across platforms. Additionally, I have deep experience with 
                <strong>Redux, Context API, React Hooks, and microfrontend architectures</strong>, allowing me to build 
                modular and maintainable codebases.
            </p>

            <p>
                Beyond front-end development, I specialize in <strong>React Native</strong>, crafting 
                <strong>cross-platform mobile applications</strong> with native module integration, enabling seamless 
                performance on iOS and Android. My back-end proficiency includes <strong>Node.js, Express.js, and MongoDB</strong>, 
                with a focus on <strong>microservice architecture</strong> and <strong>serverless functions (AWS, Firebase Functions)</strong>.
            </p>

            <p>
                I am dedicated to delivering <strong>efficient, accessible, and scalable solutions</strong> that drive 
                real-world impact. Always eager to learn and collaborate, I take pride in writing clean, maintainable 
                code and continuously refining my skill set.
            </p>

            <p>Let's connect and build something amazing!</p>

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