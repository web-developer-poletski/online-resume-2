import React from 'react';
import { shallow } from 'enzyme';

import Educations from '../index';

describe('<Education />', () => {
  it('renders without crashing', () => {
    shallow(<Educations />);
  });
});