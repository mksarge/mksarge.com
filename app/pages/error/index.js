/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { browserHistory, Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';

const goBack = (e) => {
  e.preventDefault();
  browserHistory.goBack();
};

const ErrorPage = () => (
  <Page title="Page Not Found">
    <div className={css.container}>
      <div className={css.status}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
      <p>
        The page you&apos;re looking for does not exist.
      </p>
      <div className={css.fakeLink} onClick={goBack}>Go back</div>
      <p style={{ display: 'inline-block' }}>
        , or head to the&nbsp;
        <Link to="/">home page</Link>.
      </p>
    </div>
  </Page>
);

export default ErrorPage;
