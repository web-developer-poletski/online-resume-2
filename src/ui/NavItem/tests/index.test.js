import React from 'react';
import { render, shallow } from 'enzyme';

import NavItem from '../index';

describe('<NavItem />', () => {
  it('renders without crashing', () => {
    shallow(<NavItem />);
  });

  it('renders nav item title', () => {
    const wrapper = render(<NavItem title="home" />);
    expect(wrapper.text()).toContain('home');
  });

  it('renders a link', () => {
    const wrapper = render(<NavItem link="#contacts" />);
    expect(wrapper.find('a[href="#contacts"]')).toHaveLength(1);
  });
});
