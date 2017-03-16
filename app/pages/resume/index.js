import React, { PropTypes } from 'react';
import Page from '../../components/Page';
import css from './index.css';
import { resume } from '../../../config';

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
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const App = () => (
  <Page title="Resume" >
    <h2 className={css.heading}>Resume</h2>
    <a href="/resume.pdf">» View as PDF</a>
    {resume.map((paragraph, i) => (
      <Paragraph
        key={i.toString()}
        icon={paragraph.icon}
        title={paragraph.title}
        text={paragraph.text}
      />
    ))}
  </Page>
);

export default App;
