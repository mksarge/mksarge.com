import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';

const renderPosts = () => posts.map((post) => (
  <li key={post.url}>
    <p className={css.link}>
      <Link to={`/blog/${post.url}`}>{post.title}</Link>
    </p>
    <p className={css.subtext}>{post.formattedDate}</p>
  </li>));

const BlogPage = () => (
  <Page title="Blog">
    <h1>All Posts</h1>
    <ul>
      {renderPosts()}
    </ul>
  </Page>
);

export default BlogPage;
