import chickEmoji from './icons/chick.svg';
import gradEmoji from './icons/grad.svg';
import rocketEmoji from './icons/rocket.svg';
import shirtEmoji from './icons/shirt.svg';

import overview from './markdown/overview.md';
import education from './markdown/education.md';
import experience from './markdown/experience.md';
import oss from './markdown/oss.md';

const resume = [
  {
    icon: chickEmoji,
    title: 'Overview',
    text: overview.html,
  },
  {
    icon: gradEmoji,
    title: 'Education',
    text: education.html,
  },
  {
    icon: shirtEmoji,
    title: 'Experience',
    text: experience.html,
  },
  {
    icon: rocketEmoji,
    title: 'Open Source',
    text: oss.html,
  },
];

export default resume;
