import React from 'react';
import PropTypes from 'prop-types';
import TextCarousel from './TextCarousel';
import css from './Header.css';
import config from '../../../config/config.json';

import profileIcon from './icons/profile.png';
import githubIcon from './icons/github.svg';
import twitterIcon from './icons/twitter.svg';
import emailIcon from './icons/email.svg';
import mediumIcon from './icons/medium.svg';

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
    icon: mediumIcon,
    link: config.medium,
    alt: 'Medium',
  },
  {
    icon: emailIcon,
    link: config.email,
    alt: 'Email',
  },
];

const Header = (props) => (props.path === '/') && (
  <div className={css.background} >
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
          <a className={css.icon} key={i.toString()} href={val.link}>
            <img src={val.icon} alt={val.alt} />
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
