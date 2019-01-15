import * as React from "react";
import { shallow } from 'enzyme';
import Header from "./Header";
import { Link } from 'react-router-dom';

describe("Header", () => {
	let wrapper = shallow(<Header />);
    let HTMLText = <div className="app">
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
    </div>;
    
    it('should have component', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should have expected HTML', () => {
      expect(wrapper.contains(HTMLText)).toEqual(true);
    });

    it('should have expected HTML class', () => {
      expect(wrapper.find(".app").length).toEqual(1);
    });
});
