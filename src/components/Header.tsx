import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IUser from '../types/IUser';

interface IProps extends IUser {
  logout: any
};

interface IState {
};

class Header extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        Hello World, am from Header....
        <span onClick={this.props.logout}> Logout </span>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
