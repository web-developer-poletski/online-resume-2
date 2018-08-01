import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../index';
import NavItem from '../../NavItem';

describe('<NavBar />', () => {
  const navItems = [
    {
      title: 'home',
      link: '#home',
    },
    {
      title: 'about',
      link: '#about',
    },
    {
      title: 'contact us',
      link: '#contact',
      id: 'contact'
    }
  ];

  it('renders without crashing', () => {
    shallow(<NavBar />);
  });

  it('renders nav items', () => {
    const wrapper = shallow(<NavBar navItems={navItems} />);
    expect(wrapper.find(NavItem)).toHaveLength(navItems.length);
  });
});
