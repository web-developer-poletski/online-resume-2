import React from 'react';
import { render, shallow } from 'enzyme';

import Social from '../index';

describe('<Social />', () => {
  const email = 'some@email.service';

  it('renders without crashing', () => {
    shallow(<Social />);
  });

  it('renders email address', () => {
    const properties = { email };
    const wrapper = render(<Social type="email" properties={properties}/>);
    expect(wrapper.text()).toContain(email);
  });

  it('renders a link to email', () => {
    const properties = { email };
    const wrapper = render(<Social type="email" properties={properties}/>);
    expect(wrapper.find(`a[href="mailto:${email}"]`)).toHaveLength(1);
  });

  it('contains a renderable component for email', () => {
    shallow(<Social.Email email="some@email.here" />);
  });
});
