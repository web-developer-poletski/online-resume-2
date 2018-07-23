import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Experience from '../index';

describe('<Experience />', () => {
  it('renders without crashing', () => {
    shallow(<Experience />);
  });

  it('renders title', () => {
    const wrapper = render(<Experience title="Some title" />);
    expect(wrapper.text()).toContain('Some title');
  });

  it('renders brief', () => {
    const wrapper = render(<Experience brief="First experience" />);
    expect(wrapper.text()).toContain('First experience');
  });

  it('renders brief detail', () => {
    const wrapper = render(<Experience briefDetail="(liked it)" />);
    expect(wrapper.text()).toContain('(liked it)');
  });

  it('renders description', () => {
    const wrapper = render(<Experience description="lorem ipsum" />);
    expect(wrapper.text()).toContain('lorem ipsum');
  });

  it('renders experience url as a link', () => {
    const wrapper = mount(
      <Experience experienceURL="http://my-experience.me" />);

    expect(wrapper.containsMatchingElement(
      <a href="http://my-experience.me"></a>)).toBe(true);
  });

  it('renders experience url text', () => {
    const wrapper = render(<Experience experienceURLText="my-experience" />);
    expect(wrapper.text()).toContain('my-experience');
  });

  describe('Experience styled components', () => {
    it('<Experience.Wrapper /> renders without crashing', () => {
      shallow(<Experience.Wrapper />);
    });

    it('<Experience.Title /> renders without crashing', () => {
      shallow(<Experience.Title />);
    });

    it('<Experience.Brief /> renders without crashing', () => {
      shallow(<Experience.Brief />);
    });

    it('<Experience.BriefDetail /> renders without crashing', () => {
      shallow(<Experience.BriefDetail />);
    });

    it('<Experience.Description /> renders without crashing', () => {
      shallow(<Experience.Description />);
    });

    it('<Experience.URL /> renders without crashing', () => {
      shallow(<Experience.URL />);
    });
  });
});