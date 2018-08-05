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

Experience.Brief = styled.h4`
  ${media.desktop`
    flex: 75%;
    order: 2;
    margin: 0 0 0 12px;
  `}
  ${media.phone`
    flex: none;
    margin: 8px 0 4px 0;
  `}
`;
Experience.Brief.displayName = 'Experience.Brief';

Experience.BriefDetail = styled.p`
  ${media.desktop`
    flex: 75%;
    order: 3;
    margin: 0 0 8px 25%;
  `}
  ${media.phone`
    flex: none;
    margin: 0 0 4px 0;
  `}
  font-size: 12px;
`;
Experience.BriefDetail.displayName = 'Experience.BriefDetail';

Experience.Description = styled.p`
  ${media.desktop`
    flex: 75%;
    order: 4;
    margin: 0 0 8px 25%;
  `}
  ${media.phone`
    flex: none;
    margin: 0 0 4px 0;
    max-height: 
  `}
`;
Experience.Description.displayName = 'Experience.Description';

Experience.Title = styled.h4`
  ${media.desktop`
    flex: 25%;
    order: 1;
    margin-bottom: 12px;
  `}
  ${media.phone`
    flex: none;
    margin: 0;
    font-size: 20px;
  `}
`;
Experience.Title.displayName = 'Experience.Title';

Experience.URL = styled.a.attrs({
  href: ({ employerURL }) => employerURL || '',
})`
  ${media.desktop`
    flex: 75%;
    order: 5; 
    margin-left: 25%;
  `}
  ${media.phone`
    flex: none;
    margin-left: 0;
  `}
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
  color: inherit;
`;
Experience.URL.displayName = 'Experience.URL';
// ----- STYLED COMPONENTS END -----

export const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  briefDetail: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string.isRequired,
  experienceURL: PropTypes.string,
  experienceURLText: PropTypes.string,
};

Experience.propTypes = propTypes;

export const defaultProps = {
  id: '',
  title: '',
  brief: '',
  description: '',
};

Experience.defaultProps = defaultProps;

export default function Experience({
  title,
  brief,
  briefDetail,
  description,
  experienceURL,
  experienceURLText,
}) {
  return (
    <Experience.Wrapper>
      <Experience.Title>{title}</Experience.Title>
      <Experience.Brief>{brief}</Experience.Brief>
      <Experience.BriefDetail>{briefDetail}</Experience.BriefDetail>
      <Experience.Description>{description}</Experience.Description>
      <Experience.URL href={experienceURL}>
        &#128279;
        &nbsp;
        {experienceURLText}
      </Experience.URL>
    </Experience.Wrapper>
  );
} 