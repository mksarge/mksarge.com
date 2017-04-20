import React, { PropTypes } from 'react';
import TextCarousel from './TextCarousel';
import css from './Header.css';
import config from '../../../config/config.json';

import profileIcon from './icons/profile.png';
import githubIcon from './icons/github.svg';
import twitterIcon from './icons/twitter.svg';
import emailIcon from './icons/email.svg';

const links = [
  {
    icon: githubIcon,
    link: config.github,
    alt: 'GitHub',
  },
  {
    icon: twitterIcon,
    link: config.twitter,
    alt: 'Twitter',
  },
  {
    icon: emailIcon,
    link: config.email,
    alt: 'Email',
  },
];

const Header = (props) => (props.path === '/') && (
  <div className={css.header} >
    <div className={css.container}>
      <img className={css.image} src={profileIcon} alt="" />
      <h4 className={css.text}>
        Hey, I&apos;m Michael. I&apos;m a software developer
        working at&nbsp;
        <a href="https://www.ubc.ca/">UBC</a>
        , currently...&nbsp;
      </h4>
      <TextCarousel className={css.carousel} input={config.headerText} />
      <div className={css.iconContainer}>
        {links.map((val, i) => (
          <a key={i.toString()} href={val.link}>
            <img className={css.icon} src={val.icon} alt={val.alt} />
          </a>
        ))}
      </div>
    </div>
  </div>);

Header.propTypes = {
  path: PropTypes.string,
};

Header.defaultProps = {
  path: '',
};

export default Header;
