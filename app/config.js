const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  name: 'Michael Sargent',
  github: 'https://github.com/mksarge/mksarge.com',
  routes: [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'blog' },
  ],
};

export default config;
