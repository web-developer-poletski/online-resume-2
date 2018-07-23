import React from 'react';
import { render, shallow } from 'enzyme';
import Section from '../index';

describe('<Section />', () => {
  it('renders without crasing', () => {
    shallow(<Section />);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Section>
        <div className="child-a" />
        <div className = "child-b" />
      </Section>
    );

    expect(wrapper.contains(<div className="child-a" />)).toBe(true);
    expect(wrapper.contains(<div className = "child-b" />)).toBe(true);
  });

  it('renders the prop title', () => {
    const wrapper = render(<Section title = "Section A" />);
    expect(wrapper.text()).toContain('Section A');
  });

  describe('Section styled components', () => {
    it('<Section.Wrapper /> renders without crashing', () => {
      shallow(<Section.Wrapper />);
    });

    it('<Section.Container /> renders without crashing', () => {
      shallow(<Section.Container />);
    });

    it('<Section.Title /> renders without crashing', () => {
      shallow(<Section.Title />);
    });

    it('<Section.Subtitle /> renders without crashing', () => {
      shallow(<Section.Subtitle />);
    });

    it('<Section.Body /> renders without crashing', () => {
      shallow(<Section.Body />);
    });
  });
});