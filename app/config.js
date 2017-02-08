const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  name: 'Michael Sargent',
  source: 'https://github.com/mksarge/mksarge.com',
  github: 'https://github.com/mksarge',
  twitter: 'https://twitter.com/michaelksargent',
  email: 'michael-sargent@hotmail.com',
  routes: [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'blog' },
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
      text: 'reading about the latest news in web tech.',
      color: '#f67',
    },
  ],
  projects: [
    {
      name: 'ClassPortal',
      text: 'Course management system',
      url: 'https://ubc-classportal.firebaseapp.com',
    },
    {
      name: 'React Starter App',
      text: 'Static React boilerplate',
      url: 'https://react-starter-app.firebaseapp.com/',
    },
    {
      name: 'Node-TypeScript-Restify-Mongoose',
      text: 'Node.js REST API boilerplate',
      url: 'https://github.com/mksarge/node-typescript-restify-mongoose',
    },
  ],
};

export default config;
