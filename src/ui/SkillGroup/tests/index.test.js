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

  it('renders skills in defined order', () => {
    const skillsOrderByIds = ['2', '3', '1', '5', '4'];

    const wrapper = shallow(
      <SkillGroup
        skills={skills}
        skillsOrderByIds={skillsOrderByIds}
      />
    );

    const renderedSkills = wrapper.find(Skill);

    expect(skillsOrderByIds.every((id, indx) => {
      const renderedSkill = renderedSkills.at(indx);
      return renderedSkill.prop('id') === id;
    })).toBe(true);
  });
});
