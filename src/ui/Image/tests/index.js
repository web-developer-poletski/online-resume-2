import React from 'react';
import { shallow } from 'enzyme';

import Image from '../index';

describe('<Image />', () => {
  it('renders without crashing', () => {
    shallow(<Image />);
  });
});
