import React from 'react';
import { Link } from 'redux-json-router';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../../config/posts';

const PostsPage = () => (
  <Layout>
    <Page title="Posts">
      <h2 className={css.heading}>Posts</h2>
      <ul>
        {posts.map((post, i) => (
          <li key={i.toString()} className={css.listItem}>
            <h5 className={css.link}><Link to={`/posts/${post.url}`}>{post.title}</Link></h5>
            <p className={css.date}>{post.formattedDate}</p>
            <p className={css.subtext}>{post.subtext}</p>
          </li>
        ))}
      </ul>
    </Page>
  </Layout>
);

export default PostsPage;
