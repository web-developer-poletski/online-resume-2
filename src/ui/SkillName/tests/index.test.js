import React from 'react';
import { shallow } from 'enzyme';

import SkillName from '../index';

describe('<SkillName />', () => {
  it('renders without crashing', () => {
    shallow(<SkillName />);
  });
});
