import React, { PropTypes } from 'react';
import css from './ListItem.css';

const ListItem = (props) => (
  <li>
    <h5 className={css.link}>{props.children}</h5>
    <p className={css.subtext}>{props.subtext}</p>
  </li>);

ListItem.propTypes = {
  children: PropTypes.node,
  subtext: PropTypes.string,
};

ListItem.defaultProps = {
  children: null,
  subtext: '',
};

export default ListItem;
