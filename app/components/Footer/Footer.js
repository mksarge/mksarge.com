import React from 'react';
import css from './Footer.css';
import config from '../../../config/config.json';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2017 Michael Sargent&nbsp;
        <a href={config.github}>➡</a>
      </p>
    </div>
  </footer>
);

export default Footer;
