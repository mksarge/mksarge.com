/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import css from './TextCarousel.css';

class TextCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: Math.floor(Math.random() * 10) % 3,
      interval: null,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const interval = setInterval(this.toggle, 3000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  toggle() {
    const newIndex = (this.state.index + 1 >= this.props.input.length) ? 0 : this.state.index + 1;
    this.setState({ index: newIndex });
  }

  render() {
    return (
      <p
        className={css.text}
        style={{ color: this.props.input[this.state.index].color }}
        onClick={this.toggle}
      >{this.props.input[this.state.index].text}
      </p>
    );
  }
}

TextCarousel.propTypes = {
  input: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

TextCarousel.defaultProps = {
  input: null,
};

export default TextCarousel;