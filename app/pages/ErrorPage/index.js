import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, goBack } from 'redux-json-router';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import css from './index.css';

class ErrorPage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(goBack());
  }

  render() {
    return (
      <Layout>
        <Page title="Page Not Found">
          <div className={css.container}>
            <div className={css.status}>
              <h1>404</h1>
              <h2>Page Not Found</h2>
            </div>
            <p>The page you&apos;re looking for does not exist.</p>
            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
              className={css.fakeLink}
              onClick={this.handleClick}
            >Go back</div>
            <p style={{ display: 'inline-block' }}>
              , or head to the&nbsp;
              <Link to="/">home page</Link>.
            </p>
          </div>
        </Page>
      </Layout>);
  }
}

ErrorPage.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(ErrorPage);
