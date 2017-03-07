import React from 'react';
import css from './Footer.css';
import config from '../../config';

const links = [
  {
    name: 'github',
    location: config.github,
  },
  {
    name: 'twitter',
    location: config.twitter,
  },
  {
    name: 'email',
    location: config.email,
  },
];

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2017 Michael Sargent
        <br />
        {links.map((link) => (
          <a className={css.link} href={link.location}>{link.name}</a>
        ))}
      </p>
    </div>
  </footer>
);

export default Footer;
