import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Footer>
        <div className="child">child1</div>
        <div className="child">child2</div>
      </Footer>
    );

    expect(wrapper.find('.child')).toHaveLength(2);
  });
});
