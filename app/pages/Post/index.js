import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, replace } from 'redux-json-router';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../../config/posts';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
      loaded: false,
    };
  }

  componentWillMount() {
    const post = posts.find(({ url }) => url === this.props.params.id);
    if (!post) {
      this.props.dispatch(replace('/posts'));
    } else {
      this.setState({
        post,
        loaded: true,
      });
    }
  }

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

Post.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Post);
