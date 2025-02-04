import { useState } from 'react';

function ExperienceCard({ exp, index }) {
    const [tabIndex, setTabIndex] = useState(0);
    
    const { title, company, location, time, description, details } = exp;

    return <div className="exp-card" style={{ backgroundColor: index === 0 ? '#FDF9EE' : (index === 1 ? 'aliceblue' : '#EEE5F8')}}>
        {
            tabIndex === 0 ? 
            <div className='exp-overview'>
                <h2 className="work-experience-title">{title}</h2>
                <h4>at</h4>
                <h3 className="work-experience-title">{company}</h3>
                <div className='work-location'>
                    <h4>in</h4>
                    <h3>{location}</h3>
                </div>
                <h4>{time}</h4>
            </div> :
            (tabIndex === 1 ?
                <div className='exp-description'>
                    <h4>Description</h4>
                    {description}
                </div> :
                <div className='exp-details'>
                    <h4>Details</h4>
                    <ul>
                        {
                            details.map((bulletPoint, index) => {
                                return <li key={index}>{bulletPoint}</li>;
                            })
                        }
                    </ul>
                </div>
            )
        }

        <div className="exp-tab">
            <button onClick={() => {setTabIndex(0)}}>Overview</button>
            <span>|</span>
            <button onClick={() => {setTabIndex(1)}}>Description</button>
            <span>|</span>
            <button onClick={() => {setTabIndex(2)}}>Details</button>
        </div>
    </div>;
}

export default ExperienceCard;