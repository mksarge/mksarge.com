import posts from './posts';
import projects from './projects';
import resume from './resume';

const config = {
  name: 'Michael Sargent',
  source: 'https://github.com/mksarge/mksarge.com',
  github: 'https://github.com/mksarge',
  twitter: 'https://twitter.com/michaelksarge',
  email: 'mailto:michael-sargent@hotmail.com',
  routes: [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'writing' },
    { path: '/projects', name: 'projects' },
    { path: '/resume', name: 'resume' },
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
};

export { config, posts, projects, resume };
