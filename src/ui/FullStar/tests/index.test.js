import React from 'react';
import { shallow } from 'enzyme';

import FullStar from '../index';

describe('<FullStar />', () => {
  it('renders without crashing', () => {
    shallow(<FullStar />);
  });
});
