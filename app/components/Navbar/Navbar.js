import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'redux-json-router';
import css from './Navbar.css';
import config from '../../../config/config.json';

const Navbar = (props) => (
  <div className={css.navbar}>
    <div className={css.container}>
      <p>
        {config.routes.map((link) => (
          <Link
            key={link.name}
            className={css.navblock}
            to={link.path}
            style={(props.path === link.name) || (props.path === link.path)
              ? { background: 'rgba(255, 255, 255, 0.2)' }
              : {}}
          >{link.name}
          </Link >))}
      </p>
    </div>
  </div>
);

Navbar.propTypes = {
  path: PropTypes.string,
};

Navbar.defaultProps = {
  path: '',
};

export default Navbar;
