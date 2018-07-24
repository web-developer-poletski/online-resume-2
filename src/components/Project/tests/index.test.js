import React from 'react';
import { shallow } from 'enzyme';

import Project from '../index';

describe('<Project />', () => {
  const project = {
    id: '1',
    projectName: 'SDI#2',
    projectImageURL: 's3.amazon.empire/deathstar-photo.png',
    projectURL: 'https://it-department.deathstar.empire',
    projectURLText: 'Sweet Death Star',
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

  it('renders a project image', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.find(`img[src="${project.projectImageURL}"]`)).toHaveLength(1);
  });

  it('renders a link with the project url', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.find(`a[href="${project.projectURL}"]`))
      .toHaveLength(1);
  });

  it('renders a project url text', () => {
    const wrapper = shallow(<Project {...project} />);
    expect(wrapper.text()).toContain(project.projectURLText);
  });
});
