import React, { PropTypes } from 'react';
import css from './Paragraph.css';

const Paragraph = ({ icon, title, text }) => (
  <div className={css.paragraph}>
    <h4 className={css.title} id={`${title.split(' ').join('-').toLowerCase()}`}>
      {icon && (<img className={css.icon} src={icon} alt="" />)}
      {title}
    </h4>
    <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

Paragraph.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Paragraph;
