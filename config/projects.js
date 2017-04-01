const markdown = require.context('../data/projects', false, /\.(md)$/);
const icons = require.context('../data/projects', false, /\.(svg)$/);

const projects = markdown.keys().map((filename) => ({
  ...markdown(filename),
  url: `/projects#${filename.slice(2, filename.length - 3)}`,
  icon: icons(`${filename.slice(0, filename.length - 3)}.svg`),
}));

projects.sort((a, b) => { // eslint-disable-line
  return a.order - b.order;
});

export default projects;
