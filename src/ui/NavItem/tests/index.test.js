import React from 'react';
import { shallow } from 'enzyme';

import NavItem from '../index';

describe('<NavItem />', () => {
  it('renders without crashing', () => {
    shallow(<NavItem />);
  });
});
