import React from 'react';
import {
  mount,
  render,
  shallow
} from 'enzyme';

import Careers from '../index';
import Career from '../../Career';

describe('<Careers />', () => {
      it('renders without crashing', () => {
        shallow( < Careers / > );
      });

      it('renders title', () => {
        const wrapper = render( < Careers / > );
        expect(wrapper.text()).toContain('Careers');
      });

      it('renders careers depending on the given data', () => {
          const FAKE_CAREERS = [{
            position: 'junior webmaster',
            employerName: 'green valley',
            employmentType: 'internship',
            description: 'Started doing awesome stuff'
          }, {
            position: 'web developer',
            employerName: 'grey cliffs',
            employmentType: 'part-time',
            description: 'Continued doing awesome stuff',
            employerURL: 'https://greycliffs.co',
            employerURLText: 'Grey Cliffs corporate website'
          }];

          const wrapper = shallow( < Careers careers = {
              FAKE_CAREERS
            }
            />);
            expect(wrapper.find(Career)).toHaveLength(FAKE_CAREERS.length);
          });
      });