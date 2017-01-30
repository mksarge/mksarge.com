const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  name: 'Michael Sargent',
  github: 'https://github.com/mksarge/mksarge.com',
  routes: [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'blog' },
  ],
  projects: [
    {
      name: 'ClassPortal',
      text: 'Course management system',
      url: 'https://ubc-310-classportal.firebaseapp.com',
    },
    {
      name: 'React Starter App',
      text: 'Static React frontend boilerplate',
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
