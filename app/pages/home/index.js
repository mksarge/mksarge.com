import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import { posts, projects } from '../../../config';

const renderPosts = posts.slice(0, 3).map((post, i) => (
  <li key={i.toString()} className={css.listItem}>
    <h5 className={css.link}>
      <Link to={`/posts/${post.url}`}>{post.title}</Link>
    </h5>
    <p className={css.date}>{post.formattedDate}</p>
  </li>));

const renderProjects = projects.slice(0, 3).map((project, i) => (
  <li key={i.toString()} className={css.listItem}>
    <h5 className={css.link}>
      <a href={project.url}>{project.name}</a>
    </h5>
    <p className={css.description}>{project.description}</p>
  </li>));

const HomePage = () => (
  <Page title="Home">
    <h2 className={css.heading}>Recent Posts</h2>
    <Link to="/posts">» View All</Link>
    <ul>
      {renderPosts}
    </ul>
    <hr />
    <h2 className={css.heading}>Projects</h2>
    <Link to={'/projects'}>» View All</Link>
    <ul>
      {renderProjects}
    </ul>
  </Page>
);

export default HomePage;
