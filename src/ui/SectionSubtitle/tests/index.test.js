import React from 'react';
import { shallow } from 'enzyme';
import SectionSubtitle from '..';

describe('<SectionSubtitle />', () => {
  it('renders without crashing', () => {
    shallow(<SectionSubtitle />);
  });

  it('renders subtitle text', () => {
    const wrapper = shallow(
      <SectionSubtitle>
        Ducks!
      </SectionSubtitle>
    );
    expect(wrapper.text()).toContain('Ducks!');
  });
});
