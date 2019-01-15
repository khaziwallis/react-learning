import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        Hello World, am from Header....
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
