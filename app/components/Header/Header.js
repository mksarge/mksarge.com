/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import css from './Header.css';
import { getRootPath } from '../../utils';
import config from '../../config';

class IntervalText extends React.Component {
  constructor() {
    super();
    this.state = {
      index: Math.floor(Math.random() * 10) % 3,
      interval: null,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const interval = setInterval(this.toggle, 5000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  toggle() {
    const newIndex = (this.state.index + 1 >= config.headerText.length) ? 0 : this.state.index + 1;
    this.setState({ index: newIndex });
  }


  render() {
    return (
      <p
        style={{
          color: config.headerText[this.state.index].color,
          cursor: 'pointer',
          fontWeight: 400,
        }}
        onClick={this.toggle}
      >{config.headerText[this.state.index].text}</p>
    );
  }
}

const Header = () => {
  const path = getRootPath();
  return path === 'home' && (
    <div className={css.header} >
      <div className={css.container}>
        <div className={css.image}>
          <img src="assets/profile.png" alt="" />
        </div>
        <div className={css.block}>
          <p>
            Hey, I&apos;m Michael. I&apos;m a software developer
            working at&nbsp;
            <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a>
            , currently...&nbsp;
          </p>
          <IntervalText />
        </div>
      </div>
    </div>);
};

export default Header;
