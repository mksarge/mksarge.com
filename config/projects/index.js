import ubcIcon from './icons/ubc.png';
import reactIcon from './icons/react.svg';
import tsIcon from './icons/typescript.png';

import classportal from './markdown/classportal.md';
import react from './markdown/react-starter.md';
import typescript from './markdown/typescript-starter.md';

const projects = [
  {
    name: 'ClassPortal',
    url: 'https://ubc-classportal.firebaseapp.com',
    description: 'Course management system built at the University of British Columbia',
    text: classportal.html,
    icon: ubcIcon,
  },
  {
    name: 'React Starter App',
    url: 'https://react-starter-app.firebaseapp.com/',
    description: 'Static React boilerplate with modern build, test, and deploy tooling',
    text: react.html,
    icon: reactIcon,
  },
  {
    name: 'TypeScript Restify Starter',
    url: 'https://github.com/mksarge/typescript-restify-starter',
    description: 'Node.js API boilerplate built with TypeScript, Restify, and Mongoose',
    text: typescript.html,
    icon: tsIcon,
  },
];

export default projects;
