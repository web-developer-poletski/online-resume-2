import React from 'react';
import { render, shallow } from 'enzyme';
import randomInt from 'random-int';

import Skill from '../index';
import EmptyStar from '../../EmptyStar';
import FullStar from '../../FullStar';

describe('<Skill />', () => {
  it('renders without crashing', () => {
    shallow(<Skill />);
  });

  it('renders name', () => {
    const wrapper = render(<Skill name="Ninjutsu" />);
    expect(wrapper.text()).toContain('Ninjutsu');
  });

  it('renders number of full stars matching the skill points count', () => {
    const skillPoints = randomInt(1, 5);

    const wrapper = shallow(<Skill points={skillPoints} />);
    expect(wrapper.find(FullStar)).toHaveLength(skillPoints);
  });

  it('does not render full stars for 0 skill points', () => {
    const skillPoints = 0;

    const wrapper = shallow(<Skill points={skillPoints} />);
    expect(wrapper.find(FullStar)).toHaveLength(skillPoints);
  });

  it('renders empty stars 5 minus skill points count times', () => {
    const skillPoints = randomInt(0, 4);
    const emptyStarCount = 5 - skillPoints;

    const wrapper = shallow(<Skill points={skillPoints} />);
    expect(wrapper.find(EmptyStar)).toHaveLength(emptyStarCount);
  });

  describe('Section styled components', () => {
    it('<Skill.Wrapper /> renders without crashing', () => {
      shallow(<Skill.Wrapper />);
    });

    it('<Skill.Name /> renders without crashing', () => {
      shallow(<Skill.Name />);
    });

    it('<Skill.Points /> renders without crashing', () => {
      shallow(<Skill.Points />);
    });
  });
});
