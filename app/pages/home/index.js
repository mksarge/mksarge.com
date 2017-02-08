import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';
import config from '../../config';

const renderPosts = () => posts.slice(0, 3).map((post) => (
  <li key={post.url}>
    <p className={css.link}>
      <Link to={`/blog/${post.url}`}>{post.title}</Link>
    </p>
    <p className={css.subtext}>{post.formattedDate}</p>
  </li>));

const renderProjects = () => config.projects.map((project) => (
  <li key={project.url}>
    <p className={css.link}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.name}
      </a>
    </p>
    <p className={css.subtext}>{project.text}</p>
  </li>));

const HomePage = () => (
  <Page title="Home">
    <h1>Recent Posts</h1>
    <ul>
      {renderPosts()}
      <Link to="/blog">→ View All</Link>
    </ul>
    <hr />
    <h1>Projects</h1>
    <ul>
      {renderProjects()}
      <a href={config.github} target="_blank" rel="noopener noreferrer">→ View on GitHub</a>
    </ul>
  </Page>
);

export default HomePage;
