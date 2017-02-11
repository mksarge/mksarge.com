import React, { PropTypes } from 'react';
import TextCarousel from './TextCarousel';
import css from './Header.css';
import config from '../../config';

const Header = (props) => (props.path === 'home') && (
  <div className={css.header} >
    <div className={css.container}>
      <img className={css.image} src="/assets/profile.png" alt="" />
      <h4 className={css.text}>
        Hey, I&apos;m Michael. I&apos;m a software developer
        working at&nbsp;
        <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>
        , currently...&nbsp;
      </h4>
      <TextCarousel className={css.carousel} input={config.headerText} />
    </div>
  </div>);

Header.propTypes = {
  path: PropTypes.string,
};

Header.defaultProps = {
  path: '',
};

export default Header;
