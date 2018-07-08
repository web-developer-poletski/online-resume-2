import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow,
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
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains component Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains component Abilities', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Abilities)).toHaveLength(1);
  });

  it('contains component Careers', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Careers)).toHaveLength(1);
  });

  it('contains component Educations', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Educations)).toHaveLength(1);
  });

  it('contains component Personal', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Personal)).toHaveLength(1);
  });

  it('contains component Projects', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Projects)).toHaveLength(1);
  });

  it('contains component Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});