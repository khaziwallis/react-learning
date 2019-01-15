import * as React from "react";
import { shallow } from 'enzyme';
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
	let wrapper = shallow(<Dashboard />);
    let HTMLText = <div className="App">Hello World, am from Dashboard....</div>;
    
    it('should renders expected html', () => {
      expect(wrapper.contains(HTMLText)).toEqual(true);
    });
});
