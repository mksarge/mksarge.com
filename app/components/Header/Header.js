/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import css from './Header.css';
import { getRootPath } from '../../utils';

const Header = () => {
  const path = getRootPath();
  return path === 'home' && (
    <div className={css.header} >
      <div className={css.container}>
        <div className={css.image}>
          <img src="assets/profile.png" alt="" />
        </div>
        <div className={css.block}>
          <p>
            Hey, I&apos;m Michael. I&apos;m a software developer
            working at&nbsp;
            <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>.
          </p>
        </div>
      </div>
    </div>);
};

export default Header;
