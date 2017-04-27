import React from 'react';
import PropTypes from 'prop-types';
import css from './Page.css';
import config from '../../../config/config.json';

class Page extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} · ${config.name}`;
  }

  render() {
    return (
      <div className={css.page} >
        {this.props.children}
      </div>);
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  title: '',
  children: null,
};

export default Page;
