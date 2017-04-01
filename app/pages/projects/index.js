import React from 'react';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import css from './index.css';
import config from '../../../config/config.json';
import projects from '../../../config/projects';

const PostsIndex = () => (
  <Page title="Projects">
    <h2 className={css.heading}>Projects</h2>
    <a href={config.github}>» View on GitHub</a>
    {projects.map((project, i) => (
      <Paragraph
        key={i.toString()}
        icon={project.icon}
        title={project.title}
        text={project.html}
      />
    ))}
  </Page>
);

export default PostsIndex;
