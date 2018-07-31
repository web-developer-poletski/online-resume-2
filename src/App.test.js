import React from 'react';
import ReactDOM from 'react-dom';
import {
  shallow,
} from 'enzyme';

import App from './App';
import {
  Abilities,
  Careers,
  Educations,
  Personal,
  Projects,
} from './components';

import { Footer, Header, NavBar } from './ui';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('contains components:', () => {
    const wrapper = shallow(<App />);

    it('contains component Header', () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });
  
    it('contains component NavBar', () => {
      expect(wrapper.find(NavBar)).toHaveLength(1);
    });
  
    it('contains component Abilities', () => {
      expect(wrapper.find(Abilities)).toHaveLength(1);
    });
  
    it('contains component Careers', () => {
      expect(wrapper.find(Careers)).toHaveLength(1);
    });
  
    it('contains component Educations', () => {
      expect(wrapper.find(Educations)).toHaveLength(1);
    });
  
    it('contains component Personal', () => {
      expect(wrapper.find(Personal)).toHaveLength(1);
    });
  
    it('contains component Projects', () => {
      expect(wrapper.find(Projects)).toHaveLength(1);
    });
  
    it('contains component Footer', () => {
      expect(wrapper.find(Footer)).toHaveLength(1);
    });
  });
});