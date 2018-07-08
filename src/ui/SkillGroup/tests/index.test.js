import React from 'react';
import { render, shallow } from 'enzyme';

import SkillGroup from '../index';
import Skill from '../../Skill';

describe('<SkillGroup />', () => {
  const skills = [
    {
      id: '1',
      name: 'HTML',
      points: 5,
    },
    {
      id: '2',
      name: 'CSS',
      points: 5,
    },
    {
      id: '3',
      name: 'Javascript',
      points: 5,
    },
    {
      id: '4',
      name: 'React',
      points: 5,
    },
    {
      id: '5',
      name: 'Redux',
      points: 4,
    },
  ];

  it('renders without crashing', () => {
    shallow(<SkillGroup />);
  });

  it('renders title', () => {
    const wrapper = render(<SkillGroup title="Quack" />);
    expect(wrapper.text()).toContain('Quack');
  });

  it('renders a number of skills depending on the given data', () => {
    const wrapper = shallow(<SkillGroup skills={skills} />);
    expect(wrapper.find(Skill)).toHaveLength(skills.length);
  });

  it('renders skills into two lists', () => {
    const wrapper = shallow(<SkillGroup skills={skills} />);
    expect(wrapper.find(SkillGroup.List)).toHaveLength(2);
  });

  it('renders even number of skills equally into two lists', () => {
    const skillsEven = skills.slice(0, 4);
    const wrapper = shallow(<SkillGroup skills={skillsEven} />);

    expect(wrapper
      .find(SkillGroup.List).first().shallow().find(Skill)).toHaveLength(2);

    expect(wrapper
      .find(SkillGroup.List).last().shallow().find(Skill)).toHaveLength(2);
  });

  it('renders odd number of skills into two lists, where the length of the first one is more by one', () => {
    const skillsEven = skills.slice(0, 5);
    const wrapper = shallow(<SkillGroup skills={skillsEven} />);

    expect(wrapper
      .find(SkillGroup.List).first().shallow().find(Skill)).toHaveLength(3);

    expect(wrapper
      .find(SkillGroup.List).last().shallow().find(Skill)).toHaveLength(2);
  });
});
