import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Header>
        <div className="child"></div>
        <div className="child"></div>
      </Header>
    );

    expect(wrapper.find('.child')).toHaveLength(2);
  });
});
