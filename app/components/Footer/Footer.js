import React from 'react';
import css from './Footer.css';
import config from '../../config';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2017 Michael Sargent
        <br />
        <a href={config.github}>github</a>
        &nbsp;&middot;&nbsp;
        <a href={config.twitter}>twitter</a>
        &nbsp;&middot;&nbsp;
        <a href={`mailto:${config.email}`}>email</a>
      </p>
    </div>
  </footer>
);

export default Footer;
