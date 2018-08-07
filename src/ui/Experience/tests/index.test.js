import React from 'react';
import { render, shallow } from 'enzyme';
import randomInt from 'random-int';

import Experience from '../index';

describe('<Experience />', () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  it('renders without crashing', () => {
    shallow(<Experience />);
  });

  it('renders title', () => {
    const wrapper = render(<Experience title="Some title" />);
    expect(wrapper.text()).toContain('Some title');
  });

  it('renders start date', () => {
    const monthIndex = randomInt(11);
    const year = randomInt(1900, 2100);
    const startDateSec = new Date(year, monthIndex, 12) / 1000;
    const wrapper = render(<Experience startDate={startDateSec} />);
    expect(wrapper.text()).toContain(months[monthIndex]);
    expect(wrapper.text()).toContain(`${year}`);
  });


  it('renders description', () => {
    const wrapper = render(<Experience description="lorem ipsum" />);
    expect(wrapper.text()).toContain('lorem ipsum');
  });

  describe('Experience styled components', () => {
    it('<Experience.Wrapper /> renders without crashing', () => {
      shallow(<Experience.Wrapper />);
    });

    it('<Experience.Title /> renders without crashing', () => {
      shallow(<Experience.Title />);
    });

    it('<Experience.Description /> renders without crashing', () => {
      shallow(<Experience.Description />);
    });
  });
});