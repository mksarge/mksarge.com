import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import ListItem from '../../components/ListItem';
import posts from '../../posts';
import config from '../../config';

const renderPosts = posts.slice(0, 3).map((post) => (
  <ListItem key={post.url} subtext={post.formattedDate} >
    <Link to={`/blog/${post.url}`}>{post.title}</Link>
  </ListItem>));

const renderWork = config.projects.slice(0, 1).map((project) => (
  <ListItem key={project.url} subtext={project.text} >
    <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
  </ListItem>));

const renderProjects = config.projects.slice(1).map((project) => (
  <ListItem key={project.url} subtext={project.text} >
    <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
  </ListItem>));

const HomePage = () => (
  <Page title="Home">
    <h2>Recent Posts</h2>
    <ul>
      {renderPosts}
      <Link to="/blog">→ View All</Link>
    </ul>
    <hr />
    <h2>Work</h2>
    <ul>
      {renderWork}
    </ul>
    <hr />
    <h2>Open Source</h2>
    <ul>
      {renderProjects}
      <a href={config.github} target="_blank" rel="noopener noreferrer">→ View All</a>
    </ul>
  </Page>
);

export default HomePage;
