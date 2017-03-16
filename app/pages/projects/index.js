import React from 'react';
import Page from '../../components/Page';
import css from '../home/index.css';
import { config, projects } from '../../../config';

const renderProjects = projects.map((project) => (
  <li key={project.url}>
    <h5 className={css.link}><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h5>
    <p className={css.description}>{project.text}</p>
  </li>));

const BlogPage = () => (
  <Page title="Blog">
    <h2 className={css.heading}>Projects</h2>
    <a href={config.github} target="_blank" rel="noopener noreferrer">» View All</a>
    <ul>
      {renderProjects}
    </ul>
  </Page>
);

export default BlogPage;
