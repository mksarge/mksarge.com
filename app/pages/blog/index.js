import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import ListItem from '../../components/ListItem';
import posts from '../../posts';

const renderPosts = posts.map((post) => (
  <ListItem key={post.url} subtext={post.formattedDate} >
    <Link to={`/blog/${post.url}`}>{post.title}</Link>
  </ListItem>));

const BlogPage = () => (
  <Page title="Blog">
    <h2>All Posts</h2>
    <ul>
      {renderPosts}
    </ul>
  </Page>
);

export default BlogPage;
