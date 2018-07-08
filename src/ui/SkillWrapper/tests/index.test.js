import React from 'react';
import { shallow } from 'enzyme';

import SkillWrapper from '../index';

describe('<SkillWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<SkillWrapper />);
  });
});
