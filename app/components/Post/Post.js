import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import posts from '../../posts';
import Page from '../Page';
import css from './Post.css';

class Post extends React.Component {
  constructor() {
    super();
    this.state = { post: '' };
  }

  componentWillMount() {
    // use the url query string to find the matching markdown post
    const post = posts.find((val) => val.url === this.props.params.postId);

    // if the post was not found, redirect to /blog; else, set state
    (!post) ? browserHistory.push('/blog') : this.setState({ post }); // eslint-disable-line no-unused-expressions
  }

  render() {
    return (
      <Page title={this.state.post.title}>
        <div className={css.return}>
          <Link to="/blog">← All Posts</Link>
        </div>
        <hr />
        <h1 className={css.title}>{this.state.post.title}</h1>
        <p className={css.subtitle}>{this.state.post.subtitle}</p>
        <hr />
        <div className={css.body} dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
        <p className={css.date}>Posted on {this.state.post.formattedDate}.</p>
      </Page>
    );
  }
}

Post.propTypes = {
  params: PropTypes.shape({
    postId: PropTypes.string,
  }),
};


Post.defaultProps = {
  params: {
    postId: '',
  },
};

export default Post;
