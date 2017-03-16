import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import { posts } from '../../../config';

const PostsIndex = () => (
  <Page title="Posts">
    <h2 className={css.heading}>Posts</h2>
    <a href="https://gist.github.com/mksarge">» View on GitHub</a>
    <ul>
      {posts.map((post, i) => (
        <li key={i.toString()} className={css.listItem}>
          <h5 className={css.link}><Link to={`/posts/${post.url}`}>{post.title}</Link></h5>
          <p className={css.date}>{post.formattedDate}</p>
        </li>
      ))}
    </ul>
  </Page>
);

export default PostsIndex;
