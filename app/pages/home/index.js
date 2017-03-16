import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import { config, posts, projects } from '../../../config';

const renderPosts = posts.slice(0, 3).map((post) => (
  <li key={post.url}>
    <h5 className={css.link}><Link to={`/blog/${post.url}`}>{post.title}</Link></h5>
    <p className={css.date}>{post.formattedDate}</p>
  </li>));

const renderProjects = projects.map((project) => (
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
    <h2 className={css.heading}>Projects</h2>
    <a href={config.github} target="_blank" rel="noopener noreferrer">» View All</a>
    <ul>
      {renderProjects}
    </ul>
  </Page>
);

export default HomePage;
