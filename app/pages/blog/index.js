import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';

const renderPosts = () => posts.map((post) => (
  <li key={post.url}>
    <h5 className={css.link}>
      <Link to={`/blog/${post.url}`}>{post.title}</Link>
    </h5>
    <h6 className={css.subtext}>{post.formattedDate}</h6>
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
