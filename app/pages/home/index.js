import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';
import config from '../../config';

const renderPosts = () => posts.slice(0, 3).map((post) => (
  <li key={post.url}>
    <h5 className={css.link}>
      <Link to={`/blog/${post.url}`}>{post.title}</Link>
    </h5>
  </li>));

const renderProjects = () => config.projects.map((project) => (
  <li key={project.url}>
    <h5 className={css.link}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.name}
      </a>
    </h5>
    <h6 className={css.subtext}>{project.text}</h6>
  </li>));

const HomePage = () => (
  <Page title="Home">
    <h1>Recent Posts</h1>
    <ul>
      {renderPosts()}
      <Link to="/blog">→ View all posts</Link>
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
