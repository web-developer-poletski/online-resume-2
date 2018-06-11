import React from 'react';
import { render, shallow } from 'enzyme';

import Careers from '../index';

describe('<Careers />', () => {
  it('renders without crashing', () => {
    shallow(<Careers />);
  });

  it('renders title', () => {
    const wrapper = render(<Careers />);
    expect(wrapper.text()).toContain('Careers');
  });
});
