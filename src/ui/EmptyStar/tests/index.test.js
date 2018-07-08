import React from 'react';
import { shallow } from 'enzyme';

import EmptyStar from '../index';

describe('<EmptyStar />', () => {
  it('renders without crashing', () => {
    shallow(<EmptyStar />);
  });
});
