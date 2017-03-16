import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { posts } from '../../../config';
import Page from '../Page';
import css from './Post.css';

class Post extends React.Component {
  constructor() {
    super();
    this.state = { post: '' };
  }

  componentWillMount() {
    // load the post post from the url, else redirect to /post
    const post = posts.find((val) => val.url === this.props.params.postId);
    (!post) ? browserHistory.push('/posts') : this.setState({ post }); // eslint-disable-line no-unused-expressions
  }

  render() {
    return (
      <Page title={this.state.post.title}>
        <div className={css.post}>
          <Link to="/posts">« All Posts</Link>
          <p className={css.date}>{this.state.post.formattedDate}</p>
          <hr />
          <h1 className={css.title}>{this.state.post.title}</h1>
          <h6 className={css.subtext}>{this.state.post.subtext}</h6>
          <hr />
          <div className={css.body} dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
        </div>
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
    postId: null,
  },
};

export default Post;
