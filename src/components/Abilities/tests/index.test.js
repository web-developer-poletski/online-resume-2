import React from 'react';
import { shallow } from 'enzyme';

import Abilities from '../index';
import { SkillGroup } from '../../../ui';

describe('<Ability />', () => {
  it('renders without crashing', () => {
    shallow(<Abilities />);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Abilities>
        <div id="1"></div>
        <div id="2"></div>
      </Abilities>
    );

    expect(wrapper.children()).toHaveLength(2);
  });
});
