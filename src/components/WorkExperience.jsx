import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
    const workExperiences = [
        {   title: 'Full-Stack Software Developer',
            company: 'Two Six Technologies',
            location: 'Arlington, VA',
            time: 'Mar 2022 - Present',
            description: 'Two Six Technologies develops advanced technology solutions for defense, security, and safety missions. Their offerings include cyber defense, data analytics, information operations, and electronic systems. I was in the team of IKE development, which is an orchestration, automation, and analysis tool designed to enhance situational understanding across all domains.',
            details: [
                <p>
                    Collaborated with UI/UX designers to convert <strong>Figma</strong> wireframes 
                    into interactive <strong>React</strong> components using <strong>Material UI</strong>, 
                    enhancing user experience and data visualization.
                </p>,
                <p>
                    Developed reusable detail card components for mission data visualization, 
                    leveraging React, <strong>Redux</strong>, and optimized <strong>React Hooks</strong> 
                    (<strong>useEffect</strong>, <strong>useState</strong>) for efficient state management.
                </p>,
                <p>
                    Designed and implemented backend <strong>RESTful APIs</strong> using <strong>Node.js</strong> 
                    and <strong>Express.js</strong> to integrate diverse data sources, ensuring seamless 
                    and timely data flow critical for mission analysis and decision-making.
                </p>,
                <p>
                    Built a custom data filtering system using <strong>useMemo</strong> and <strong>useCallback</strong> 
                    to enhance the efficiency of processing large datasets relevant to mission operations, 
                    resulting in faster data retrieval.
                </p>,
                <p>
                    Conducted cross-browser testing to ensure <strong>compatibility</strong> and 
                    <strong>responsiveness</strong> of IKE's user interface across various devices 
                    used in field operations.
                </p>,
                <p>
                    Utilized <strong>WebSockets</strong> for real-time data synchronization, creating 
                    dynamic and interactive visualizations, enabling users to monitor and analyze 
                    mission-critical data interactively.
                </p>,
                <p>
                    Implemented <strong>React-Leaflet</strong> for interactive geospatial data visualization, 
                    enhancing situational awareness by allowing users to explore mission-related spatial data.
                </p>,
                <p>
                    Developed a real-time notification system with <strong>Socket.IO</strong>, delivering 
                    instant alerts for critical events, improving response time and user engagement.
                </p>,
                <p>
                    Utilized <strong>AWS S3</strong> for scalable storage and secure backup of operational 
                    datasets, ensuring data reliability and availability.
                </p>
            ]
        },
        {
            title: 'Front End Developer',
            company: 'Association of American Medical Colleges',
            location: 'Washington, DC',
            time: 'Jan 2019 - Feb 2022',
            description: 'The Association of American Medical Colleges (AAMC) is a nonprofit organization dedicated to improving health through medical education, patient care, medical research, and community collaborations.',
            details: [
                <p>
                    Created interactive dashboards using <strong>React</strong> to visualize complex datasets, 
                    aiding medical researchers in data analysis.
                </p>,
                <p>
                    Implemented advanced filtering and sorting in React/<strong>Redux</strong>, improving 
                    researchers' ability to analyze specific data subsets efficiently.
                </p>,
                <p>
                    Refactored legacy codebase, implementing lazy loading for a reduction in load time for 
                    research data pages.
                </p>,
                <p>
                    Developed a React-based customizable dashboard with drag-and-drop widgets, enabling 
                    personalized data analysis for researchers.
                </p>,
                <p>
                    Designed and developed a real-time notification system using <strong>WebSockets</strong>, 
                    ensuring users receive timely updates on critical research data.
                </p>,
                <p>
                    Developed and deployed <strong>web scraping</strong> scripts using <strong>Puppeteer</strong> 
                    to extract valuable medical research data from external sources.
                </p>,
                <p>
                    Utilized <strong>Git</strong> for version control and managed code repositories, ensuring 
                    efficient collaboration and code integrity among team members.
                </p>,
                <p>
                    Conducted regular code reviews and pair programming sessions, promoting best practices and 
                    knowledge sharing within the development team.
                </p>,
                <p>
                    Implemented unit test with <strong>Jest</strong>, increasing code reliability and reducing bugs.
                </p>
            ]
        },
        {
            title: 'Front End Developer',
            company: 'King County Housing Authority',
            location: 'Seattle, WA',
            time: 'Sep 2016 - Dec 2018',
            description: 'King County Housing Authority (KCHA) provides affordable housing options and support service to low- and moderate-income residents in King County, Washington. I was responsible for their website optimization and developing new features for frauds and crimes reports as a Front-End Developer',
            details: [
                <p>
                    Reimplemented the KCHA website to ensure full responsiveness across all devices 
                    using <strong>CSS Grid</strong>, <strong>Flexbox</strong> and <strong>Material UI</strong>.
                </p>,
                <p>
                    Developed <strong>mobile-friendly application</strong> using <strong>React Native</strong>, 
                    ensuring seamless performance on both iOS and Android devices.
                </p>,
                <p>
                    Developed an intuitive fraud and crime reporting form with <strong>React</strong>, 
                    leveraging <strong>Redux</strong> for state management to streamline and improve user experience.
                </p>,
                <p>
                    Implemented robust input validation and sanitization to prevent injection attacks, ensuring 
                    data integrity in fraud and crime reports.
                </p>,
                <p>
                    Designed <strong>MongoDB</strong> schemas to efficiently store fraud and crime reports, 
                    leveraging <strong>AWS S3</strong> for scalable and secure media storage.
                </p>,
                <p>
                    Enhanced the searching and filtering functionality for reported frauds and crimes, implementing real-time 
                    re-rendering of results as the user types using <strong>Redux</strong> and component state management.
                </p>,
                <p>
                    Integrated interactive maps using <strong>React-Leaflet</strong> to visualize reported frauds and 
                    crimes, improving the spatial data representation and user engagement with geographical insights.
                </p>
            ]
        }
    ];

    return <div id='work-experience'>
        <h1>Work Experience</h1>
        <div className="exps">
            {
                workExperiences.map((exp, index) => {
                    return <ExperienceCard key={index} exp={exp} index={index}/>;
                })
            }
        </div>
    </div>;
}

export default WorkExperience;