import React from 'react';
import { shallow } from 'enzyme';

import NavItem from '../index';

describe('<NavItem />', () => {
  it('renders without crashing', () => {
    shallow(<NavItem />);
  });

  it('renders nav item title', () => {
    const wrapper = shallow(<NavItem title="home" />);
    expect(wrapper.text()).toContain('home');
  });

  it('renders a link', () => {
    const wrapper = shallow(<NavItem link="#contacts" />);
    expect(wrapper.find('a[href="#contacts"]')).toHaveLength(1);
  });
});
