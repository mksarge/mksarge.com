const markdown = require.context('../data/resume', false, /\.(md)$/);
const icons = require.context('../data/resume', false, /\.(svg)$/);

const resume = markdown.keys().map((filename) => ({
  ...markdown(filename),
  icon: icons(`${filename.slice(0, filename.length - 3)}.svg`),
}));

resume.sort((a, b) => { // eslint-disable-line
  return a.order - b.order;
});

export default resume;
