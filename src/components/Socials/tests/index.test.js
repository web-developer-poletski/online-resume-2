import React from 'react';
import { shallow } from 'enzyme';

import Socials from '../index';
import Social from '../../Social';

describe('<Socials />', () => {
  const socials = [
    {
      id: '1',
      type: 'mobile',
      properties: {
        mobile: '(123)456-7890',
      },
    },
    {
      id: '2',
      type: 'email',
      properties: {
        email: 'some@email.service',
      },
    },
  ];

  it('renders without crashing', () => {
    shallow(<Socials />);
  });

  it('renders exact number of socials', () => {
    const wrapper = shallow(<Socials socials={socials} />);
    expect(wrapper.find(Social)).toHaveLength(socials.length);
  });
});
