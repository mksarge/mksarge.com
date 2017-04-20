import React from 'react';
import { Link } from 'redux-json-router';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../../config/posts';
import projects from '../../../config/projects';

const renderPosts = posts.slice(0, 3).map((post, i) => (
  <li key={i.toString()} className={css.listItem}>
    <h5 className={css.link}>
      <Link to={`/posts/${post.url}`}>{post.title}</Link>
    </h5>
    <p className={css.date}>{post.formattedDate}</p>
    <p className={css.subtext}>{post.subtext}</p>
  </li>));

const renderProjects = projects.slice(0, 3).map((project, i) => (
  <li key={i.toString()} className={css.listItem}>
    <h5 className={css.link}>
      <Link to={project.url}>{project.title}</Link>
    </h5>
    <a className={css.date} href={project.link}>{project.link}</a>
    <p className={css.subtext}>{project.description}</p>
  </li>));

const HomePage = () => (
  <Layout>
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
  </Layout>
);

export default HomePage;
