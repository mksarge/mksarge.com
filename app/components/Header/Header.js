import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from './Header.css';
import config from '../../env';
import { getRootPath } from '../../utils';

const Header = (props) => {
  const path = getRootPath();
  return (
    <div className={path === 'home' ? [css.header, css.header2].join(' ') : css.header}>
      <div className={css.ribbon}>
        <a href={config.github}>
          <img src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" />
        </a>
      </div>
      <div className={css.title}>
        <Link to="/">
          {path === 'home' && (<img className={css.logo} src="react-logo.png" alt="" />)}
          {props.text}
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: '',
};

export default Header;
