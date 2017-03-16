import posts from './posts';

const config = {
  name: 'Michael Sargent',
  source: 'https://github.com/mksarge/mksarge.com',
  github: 'https://github.com/mksarge',
  twitter: 'https://twitter.com/michaelksarge',
  email: 'mailto:michael-sargent@hotmail.com',
  routes: [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'writing' },
  ],
  headerText: [
    {
      text: 'building something cool with React and Node.js.',
      color: '#f90',
    },
    {
      text: 'living in beautiful Vancouver, BC.',
      color: '#7ea',
    },
    {
      text: 'solving interesting problems for ClassPortal.',
      color: '#f7c',
    },
    {
      text: 'reading about the latest in web tech.',
      color: '#f67',
    },
  ],
  projects: [
    {
      name: 'ClassPortal',
      text: 'Course management system built at the University of British Columbia',
      url: 'https://ubc-classportal.firebaseapp.com',
    },
    {
      name: 'React Starter App',
      text: 'Static React boilerplate with modern build, test, and deploy tooling',
      url: 'https://react-starter-app.firebaseapp.com/',
    },
    {
      name: 'TypeScript Restify Mongoose Starter',
      text: 'Node.js API boilerplate built with TypeScript, Restify, and Mongoose',
      url: 'https://github.com/mksarge/node-typescript-restify-mongoose',
    },
  ],
};

export { config, posts };
