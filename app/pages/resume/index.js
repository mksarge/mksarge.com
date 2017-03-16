import React from 'react';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import css from './index.css';
import { resume } from '../../../config';

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
