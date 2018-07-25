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

  describe('SkillGroup styled components', () => {
    it('<SkillGroup.Wrapper /> renders without crashing', () => {
      shallow(<SkillGroup.Wrapper />);
    });

    it('<SkillGroup.Title /> renders without crashing', () => {
      shallow(<SkillGroup.Title />);
    });

    it('<SkillGroup.List /> renders without crashing', () => {
      shallow(<SkillGroup.List />);
    });
  });
});
