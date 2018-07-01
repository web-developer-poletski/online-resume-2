import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Career from '../index';

describe('<Career />', () => {
  it('renders without crashing', () => {
    shallow(<Career />);
  });

  it('renders career position', () => {
    const wrapper = render(<Career position="software engineer" />);
    expect(wrapper.text()).toContain('software engineer');
  });

  it('renders career employer name', () => {
    const wrapper = render(<Career employerName='Awesome Company' />);
    expect(wrapper.text()).toContain('Awesome Company');
  });

  it('renders career employmentType', () => {
    const wrapper = render(<Career employmentType='Permanent / Full-time' />);
    expect(wrapper.text()).toContain('Permanent / Full-time');
  });

  it('renders career description', () => {
    const wrapper = render(<Career description="Some career description" />);
    expect(wrapper.text()).toContain('Some career description');
  });

  it('renders career employer link with url', () => {
    const wrapper = mount(<Career employerURL='http://a-company.com' />);
    expect(wrapper.containsMatchingElement(<a href="http://a-company.com" ></a>)).toEqual(true);
  });

  it('renders career employer link text', () => {
    const wrapper = render(<Career employerURLText='a-company corporate website' />);
    expect(wrapper.text()).toContain('a-company corporate website');
  });
});
