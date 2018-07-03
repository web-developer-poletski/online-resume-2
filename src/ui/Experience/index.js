import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

ExperienceWrapper.displayName = 'ExperienceWrapper';


const ExperienceBrief = styled.h4`
  flex: 75%;
  order: 2;
  margin-bottom: 12px;
`;

ExperienceBrief.displayName = 'ExperienceBrief';


const ExperienceTitle = styled.h4`
  flex: 25%;
  order: 1;
  margin-bottom: 12px;
`;

ExperienceTitle.displayName = 'ExperienceTitle';


const ExperienceBriefDetail = styled.p`
  flex: 75%;
  order: 3;
  margin: 0 0 8px 25%;
`;

ExperienceBriefDetail.displayName = 'ExperienceBriefDetail';


const ExperienceDescription = styled.p`
  flex: 75%;
  order: 4;
  margin: 0 0 0 25%;
`;

ExperienceDescription.displayName = 'ExperienceDescription';

const ExperienceURL = styled.a.attrs({
  href: ({ employerURL }) => employerURL || '',
})`
  flex: 75%;
  order: 5; 
  margin: 8px 0 0 25%;
  text-decoration: none;
  color: inherit;
`;

ExperienceDescription.displayName = 'ExperienceURL';

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
    <ExperienceWrapper>
      <ExperienceTitle>{title}</ExperienceTitle>
      <ExperienceBrief>{brief}</ExperienceBrief>
      <ExperienceBriefDetail>{briefDetail}</ExperienceBriefDetail>
      <ExperienceDescription>{description}</ExperienceDescription>
      <ExperienceURL href={experienceURL}>
        {experienceURLText}
      </ExperienceURL>
    </ExperienceWrapper>
  );
} 