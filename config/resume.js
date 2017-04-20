const markdown = require.context('../data/resume', false, /\.(md)$/);
const icons = require.context('../data/resume', false, /\.(svg)$/);

const resume = markdown.keys().map((filename) => {
  let icon;

  try {
    icon = icons(`${filename.slice(0, filename.length - 3)}.svg`);
  } catch (e) {
    icon = false;
  }

  return {
    ...markdown(filename),
    icon,
  };
});

resume.sort((a, b) => { // eslint-disable-line
  return a.order - b.order;
});

export default resume;
