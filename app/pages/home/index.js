import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';
import config from '../../config';

const renderPosts = posts.slice(0, 3).map((post) => (
  <li key={post.url}>
    <h5 className={css.link}><Link to={`/blog/${post.url}`}>{post.title}</Link></h5>
    <p className={css.date}>{post.formattedDate}</p>
  </li>));

const renderProjects = config.projects.map((project) => (
  <li key={project.url}>
    <h5 className={css.link}><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h5>
    <p className={css.description}>{project.text}</p>
  </li>));

const HomePage = () => (
  <Page title="Home">
    <h2 className={css.heading}>Recent Posts</h2>
    <Link to="/blog">» View All</Link>
    <ul>
      {renderPosts}
    </ul>
    <hr />
    <h2 className={css.heading}>Open Source</h2>
    <a href={config.github} target="_blank" rel="noopener noreferrer">» View All</a>
    <ul>
      {renderProjects}
    </ul>
  </Page>
);

export default HomePage;
