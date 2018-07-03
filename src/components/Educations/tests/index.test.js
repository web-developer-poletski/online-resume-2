import React from 'react';
import { render, shallow } from 'enzyme';

import Educations from '../index';
import { Experience } from '../../../ui';

describe('<Education />', () => {
  it('renders without crashing', () => {
    shallow(<Educations />);
  });

  it('renders title', () => {
    const wrapper = render(<Educations />);
    expect(wrapper.text()).toContain('Educations');
  });

  it('renders educations depending on the given data', () => {
    const FAKE_EDUCATIONS = [
      {
        id: '1',
        providerName: 'college of web padavans',
        courseName: 'web master',
        qualificationType: 'padavan',
        description: 'learning web master tricks',
      },
      {
        id: '2',
        providerName: 'jabba the hut`s pit',
        courseName: 'web hackerz',
        qualificationType: 'semi-pro',
        description: 'mastering unfair arts',
        providerURL: 'https://jabbathehutpits.hack',
        providerURLText: 'Hutt`s Pits',
      }
    ];

    const wrapper = shallow(<Educations educations={FAKE_EDUCATIONS} />);
    expect(wrapper.find(Experience)).toHaveLength(FAKE_EDUCATIONS.length);
  });
});