import React from 'react';
import { shallow } from 'enzyme';

import Project from '../index';

describe('<Project />', () => {
  const project = {
    id: '1',
    projectName: 'SDI#2',
    description: 'some text goes here',
  };

  it('renders without crashing', () => {
    shallow(<Project />);
  });

  it('contains a project id prop', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.props().id).toEqual(project.id);
  });

  it('renders a project name', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.text()).toContain(project.projectName);
  });

  it('renders a project description', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.text()).toContain(project.description);
  });
});
