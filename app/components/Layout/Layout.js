import React, { PropTypes } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import css from './Layout.css';
import { getRootPath } from '../../utils';

const Layout = (props) => {
  const rootPath = getRootPath();
  return (
    <div className={css.layout} >
      <Navbar path={rootPath} />
      <Header path={rootPath} />
      {props.children}
      <Footer />
    </div>);
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
