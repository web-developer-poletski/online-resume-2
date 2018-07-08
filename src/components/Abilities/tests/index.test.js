import React from 'react';
import { shallow } from 'enzyme';

import Abilities from '../index';
import { SkillGroup } from '../../../ui';

describe('<Ability />', () => {
  it('renders without crashing', () => {
    shallow(<Abilities />);
  });

  it('renders correct number of skills groups', () => {
    const wrapper = shallow(<Abilities />);
    expect(wrapper.find(SkillGroup)).toHaveLength(1);
  });
});
