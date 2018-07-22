import React from 'react';
import { shallow } from 'enzyme';

import Projects from '../index';

describe('<Projects />', () => {
  it('renders without crashing', () => {
    shallow(<Projects />);
  });
});
