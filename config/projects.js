const markdown = require.context('../data/projects', false, /\.(md)$/);
const icons = require.context('../data/projects', false, /\.(svg)$/);

const projects = markdown.keys().map((filename) => {
  let icon;

  try {
    icon = icons(`${filename.slice(0, filename.length - 3)}.svg`);
  } catch (e) {
    icon = false;
  }

  return {
    ...markdown(filename),
    url: `/projects#${filename.slice(2, filename.length - 3)}`,
    icon,
  };
});

projects.sort((a, b) => { // eslint-disable-line arrow-body-style
  return a.order - b.order;
});

export default projects;
