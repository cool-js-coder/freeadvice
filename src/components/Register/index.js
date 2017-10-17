// src/components/Register/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Register extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props){
    super(props);

  }
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Register', className)} {...props}>
        <h1>
          Register Form
        </h1>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
