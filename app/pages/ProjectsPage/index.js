import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import css from './index.css';
import config from '../../../config/config.json';
import projects from '../../../config/projects';

const ProjectsPage = () => (
  <Layout>
    <Page title="Projects">
      <h2 className={css.heading}>Projects</h2>
      <a href={config.github}>» View more on GitHub</a>
      {projects.map((project, i) => (
        <Paragraph
          key={i.toString()}
          icon={project.icon}
          title={project.title}
          text={project.html}
        />
      ))}
    </Page>
  </Layout>
);

export default ProjectsPage;
