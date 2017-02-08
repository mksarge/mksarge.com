import React from 'react';
import css from './Footer.css';
import config from '../../config';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2017 Michael Sargent&nbsp;
        <a href={config.source}>
          (source)
        </a>
        <br />
        <a href={config.github}>
          <img className={css.image} src="/assets/github.png" alt="GitHub" />
        </a>
        <a href={config.twitter}>
          <img className={css.image} src="/assets/twitter.png" alt="Twitter" />
        </a>
        <a href={`mailto:${config.email}`}>
          <img className={css.image} src="/assets/email.png" alt="Email" />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
