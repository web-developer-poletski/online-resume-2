import React from 'react';
import { render, shallow } from 'enzyme';

import Projects from '../index';
import Project from '../../Project';

describe('<Projects />', () => {
  it('renders without crashing', () => {
    shallow(<Projects />);
  });

  it('renders title', () => {
    const wrapper = render(<Projects />);
    expect(wrapper.text()).toContain('Projects');
  });

  it('renders projects', () => {
    const projects = [
      {
        id: '1',
        projectName: 'Mobile pet',
        projectImageURL: 'http://mobile.pet/thumbnail.bmp',
        projectURL: 'https://mobile.pet',
        projectURLText: 'Mobile pet Homepage',
        description: 'Mobile pet description'
      },
      {
        id: '2',
        projectName: 'Roboninja',
        projectImageURL: 'http://mystorage/roboninja.png',
        projectURL: 'https://roboninja.com',
        projectURLText: 'Robo Ninja - About',
        description: 'blah-blah-blah...'
      },
    ];

    const wrapper = shallow(<Projects projects={projects} />);
    expect(wrapper.find(Project)).toHaveLength(projects.length);
  });
});
