import React from 'react';
import css from './Footer.css';
import config from '../../config';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2017 Michael Sargent&nbsp;
        <a href={config.source}>(source)</a>
      </p>
    </div>
  </footer>
);

export default Footer;
