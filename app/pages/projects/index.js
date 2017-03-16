import React from 'react';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import css from './index.css';
import { config, projects } from '../../../config';

const PostsIndex = () => (
  <Page title="Posts">
    <h2 className={css.heading}>Projects</h2>
    <a href={config.github}>» View on GitHub</a>
    {projects.map((project, i) => (
      <Paragraph
        key={i.toString()}
        icon={project.icon}
        title={project.name}
        text={project.text}
      />
    ))}
  </Page>
);

export default PostsIndex;
