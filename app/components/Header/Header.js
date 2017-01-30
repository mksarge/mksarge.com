import React, { PropTypes } from 'react';
import css from './Header.css';

const Header = () => (
  <div className={css.header} >
    <div className={css.container}>
      <div className={css.image}>
        <img src="assets/profile.png" alt="" />
      </div>
      <div className={css.block}>
        <p>
          Hey, I&apos;m Michael. I&apos;m a software developer
            working at&nbsp;
            <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>
          , currently building cool things with React.
          </p>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: '',
};

export default Header;
