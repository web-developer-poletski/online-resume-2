import React from 'react';
import { render, shallow } from 'enzyme';

import Image from '../index';

describe('<Image />', () => {
  it('renders without crashing', () => {
    shallow(<Image />);
  });

  it.skip('renders image with the given url', () => {
    const url = 'http://img.com/img.jpg';
    const wrapper = render(<Image url={url} />);
    expect(wrapper.find(`img[src="${url}"]`)).toHaveLength(1);
  });
});
