import React from 'react';
import { render, shallow } from 'enzyme';

import Personal from '../index';

describe('<Personal />', () => {
  it('renders without crashing', () => {
    shallow(<Personal />);
  });

  it('renders a person`s first name', () => {
    const wrapper = render(<Personal firstName="John"/>);
    expect(wrapper.text()).toContain('John');
  });

  it('renders a person`s last name', () => {
    const wrapper = render(<Personal lastName="Doe"/>);
    expect(wrapper.text()).toContain('Doe');
  });

  it('renders a person`s personal statement', () => {
    const wrapper = render(<Personal personalStatement="Hello world!"/>);
    expect(wrapper.text()).toContain('Hello world!');
  });

  it('renders a person`s location', () => {
    const wrapper = render(<Personal location="Planet Earth"/>);
    expect(wrapper.text()).toContain('Planet Earth');
  });

  it('renders a person`s photo with the given url', () => {
    const wrapper = render(<Personal photoURL="http://some.place/photo.png"/>);
    expect(wrapper.find('img[src="http://some.place/photo.png"]')).toHaveLength(1);
  });
});
