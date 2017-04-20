import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import css from './Layout.css';

const Layout = (props) => {
  const path = props.router.url;
  return (
    <div className={css.layout} >
      <Navbar path={path} />
      <Header path={path} />
      {props.children}
      <Footer />
    </div>);
};

Layout.propTypes = {
  router: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
};

const mapStateToProps = ({ router }) => ({ router });

export default connect(mapStateToProps)(Layout);
