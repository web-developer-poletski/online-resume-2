import React from 'react';
import { shallow } from 'enzyme';

import SkillPoints from '../index';
import EmptyStar from '../../EmptyStar';
import FullStar from '../../FullStar';

describe('<SkillPoints />', () => {
  it('renders without crashing', () => {
    shallow(<SkillPoints />);
  });
});
