import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../helpers';

// ----- STYLED COMPONENTS START -----
Experience.Wrapper = styled.div`
  ${media.desktop`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  `}
  ${media.phone`
    display: block;
  `}
`;
Experience.Wrapper.displayName = 'Experience.Wrapper';

Experience.Description = styled.p`
  ${media.desktop`
    flex: 75%;
    order: 4;
    margin: 0 0 8px 25%;
  `}
  ${media.phone`
    flex: none;
    margin: 0 0 10px 0;
    max-height: 
  `}
`;
Experience.Description.displayName = 'Experience.Description';

Experience.Time = styled.div`
  
`;
Experience.Time.displayName = 'Experience.Time';

Experience.Title = styled.h4`
  ${media.desktop`
    flex: 25%;
    order: 1;
    margin-bottom: 12px;
  `}
  ${media.phone`
    flex: none;
    margin: 14px 0 0 0;
    font-size: 20px;
  `}
`;
Experience.Title.displayName = 'Experience.Title';
// ----- STYLED COMPONENTS END -----

export const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  description: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  placeURL: PropTypes.string.isRequired,
};

Experience.propTypes = propTypes;


function getDataStr(seconds) {
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

  const date = new Date(seconds*1000);
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return `${month} ${year}`;
}

export const defaultProps = {
  id: '',
  title: '',
  description: '',
  place: '',
  placeURL: '',
};

Experience.defaultProps = defaultProps;

export default function Experience({
  title,
  startDate,
  endDate,
  description,
  place,
  placeURL,
}) {
  const startDateStr = getDataStr(startDate);
  return (
    <Experience.Wrapper>
      <Experience.Title>{title}</Experience.Title>
      <Experience.Time>{startDateStr}</Experience.Time>
      <Experience.Description>{description}</Experience.Description>
    </Experience.Wrapper>
  );
} 