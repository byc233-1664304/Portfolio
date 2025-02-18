import React from 'react';
import HtmlSvg from '../assets/html.svg';
import CssSvg from '../assets/css.svg';
import JsSvg from '../assets/js.svg';
import TsSvg from '../assets/ts.svg';
import ReactSvg from '../assets/react.svg';
import ReduxSvg from '../assets/redux.svg';
import SassSvg from '../assets/sass.svg';
import MaterialUISvg from '../assets/material-ui.svg';
import NodeSvg from '../assets/node-js.svg';
import MongodbSvg from '../assets/mongodb.svg';
import FirebaseSvg from '../assets/firebase.svg';
import GithubSvg from '../assets/github.svg';
import PostmanSvg from '../assets/postman.svg';
import NpmSvg from '../assets/npm.svg';
import VSCodeSvg from '../assets/vscode.svg';
import JiraSvg from '../assets/jira.svg';
import FigmaSvg from '../assets/figma.svg';
import SwiftSvg from '../assets/swift.svg';
import KotlinSvg from '../assets/kotlin.svg';
import JestSvg from '../assets/jest.svg';
import CypressSvg from '../assets/cypress.svg';
import PlaywrightSvg from '../assets/playwright.svg';

function Skills(){
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'html', path: HtmlSvg },
                { name: 'css', path: CssSvg },
                { name: 'JavaScript', path: JsSvg },
                { name: 'TypeScript', path: TsSvg }
            ]
        },
        {
            category: 'Frontend',
            items: [
                { name: 'React', path: ReactSvg },
                { name: 'Redux', path: ReduxSvg },
                { name: 'SASS', path: SassSvg },
                { name: 'Material UI', path: MaterialUISvg }
            ]
        },
        {
            category: 'Backend',
            items: [ { name: 'Node.js', path: NodeSvg } ]
        },
        {
            category: 'Mobile Development',
            items: [
                { name: 'Swift', path: SwiftSvg },
                { name: 'Kotlin', path: KotlinSvg }
            ]
        },
        {
            category: 'Database',
            items: [
                { name:'MongoDB', path: MongodbSvg },
                { name:'Firebase', path: FirebaseSvg }
            ]
        },
        {
            category: 'Testing',
            items: [
                { name: 'Jest', path: JestSvg },
                { name: 'Cypress', path: CypressSvg },
                { name: 'Playwright', path: PlaywrightSvg }
            ]
        },
        {
            category: 'Tools',
            items: [
                { name:'Github', path: GithubSvg },
                { name:'Postman', path: PostmanSvg },
                { name:'npm', path: NpmSvg },
                { name:'VSCode', path: VSCodeSvg },
                { name:'Jira', path: JiraSvg },
                { name:'Figma', path: FigmaSvg }
            ]
        }
    ];

    return <div id='skills'>
        <h1>Skills</h1>
        <div className='skill-items'>
            {
                skills.map((skill) => {
                    return <React.Fragment key={skill.category}>
                        <h4 className='skill-category'>{skill.category}</h4>
                        <div className='skill-items-row'>
                            {
                                skill.items.map((item) => {
                                    return <img key={item.name} src={item.path} name={item.name} className='skill-svg'/>;
                                })
                            }
                        </div>
                    </React.Fragment>;
                })
            }
        </div>
    </div>;
}

export default Skills;