import React from 'react';
import ReactDOM from 'react-dom';
import {
  mount
} from 'enzyme';

import App from './App';
import {
  Header,
  Abilities,
  Careers,
  Educations,
  Personal,
  Projects,
  Footer,
} from './components';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains component Header', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Header)).toBe(true);
  });

  it('contains component Abilities', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Abilities)).toBe(true);
  });

  it('contains component Careers', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Careers)).toBe(true);
  });

  it('contains component Educations', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Educations)).toBe(true);
  });

  it('contains component Personal', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Personal)).toBe(true);
  });

  it('contains component Projects', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Projects)).toBe(true);
  });

  it('contains component Footer', () => {
    const wrapper = mount( < App / > );
    expect(wrapper.containsMatchingElement(Footer)).toBe(true);
  });
});