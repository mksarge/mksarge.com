// import markdown
import overview from './markdown/overview.md';
import education from './markdown/education.md';
import experience from './markdown/experience.md';
import oss from './markdown/oss.md';

const resume = [
  {
    title: 'Overview',
    text: overview.html,
  },
  {
    title: 'Education',
    text: education.html,
  },
  {
    title: 'Experience',
    text: experience.html,
  },
  {
    title: 'Open Source',
    text: oss.html,
  },
];

export default resume;
