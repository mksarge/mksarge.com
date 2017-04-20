import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import css from './index.css';
import resume from '../../../config/resume';

const ResumePage = () => (
  <Layout>
    <Page title="Resume" >
      <h2 className={css.heading}>Resume</h2>
      <a href="/resume.pdf">» View as PDF</a>
      {resume.map((paragraph, i) => (
        <Paragraph
          key={i.toString()}
          icon={paragraph.icon}
          title={paragraph.title}
          text={paragraph.html}
        />
      ))}
    </Page>
  </Layout>
);

export default ResumePage;
