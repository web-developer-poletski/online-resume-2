import React from 'react';
import {
  render,
  shallow
} from 'enzyme';
import Section from '../index';

describe('<Section />', () => {
  it('renders without crasing', () => {
    shallow( < Section / > );
  });

  it('renders children', () => {
    const wrapper = shallow( <
      Section >
      <
      div className = "child-a" / >
      <
      div className = "child-b" / >
      <
      /Section>
    );

    expect(wrapper.contains( < div className = "child-a" / > )).toBe(true);
    expect(wrapper.contains( < div className = "child-b" / > )).toBe(true);
  });

  it('renders the prop title', () => {
    const wrapper = render( < Section title = "Section A" / > );

    expect(wrapper.text()).toContain('Section A');
  });
});