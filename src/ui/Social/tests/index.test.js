import React from 'react';
import { render, shallow } from 'enzyme';

import Social, { SocialLinkedin } from '../index';
import { wrap } from 'module';

describe('<Social />', () => {
  const email = 'some@email.service';
  const linkedinProfileRef = 'https://linkedin.com/profile';
  const mobile = '+64 (123)456-7890';

  it('renders without crashing', () => {
    shallow(<Social />);
  });

  it('renders mobile number', () => {
    const properties = { mobile };
    const wrapper = render(<Social type="mobile" properties={properties} />);
    expect(wrapper.text()).toContain(mobile);
  });

  it('exposes a renderable component for mobile', () => {
    shallow(<Social.Mobile mobile="+64 (123)456-7890" />);
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

  it('exposes a renderable component for email', () => {
    shallow(<Social.Email email="some@email.here" />);
  });

  it('renders linkedin profile reference', () => {
    const properties = { reference: linkedinProfileRef };
    const wrapper = render(<Social type="linkedin" properties={properties} />);
    expect(wrapper.text()).toContain(linkedinProfileRef);
  });

  it('renders a link to linkedin profile', () => {
    const properties = { reference: linkedinProfileRef };
    const wrapper = render(<Social type="linkedin" properties={properties} />);
    expect(wrapper.find(`a[href="${linkedinProfileRef}"]`)).toHaveLength(1);
  });

  it('exposes a renderable component for linkedin', () => {
    shallow(<Social.Linkedin reference={linkedinProfileRef} />);
  });
});
