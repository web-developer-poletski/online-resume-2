import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CareerWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

CareerWrapper.displayName = 'CareerWrapper';


const CareerPosition = styled.h4`
  flex: 75%;
  order: 2;
  margin-bottom: 12px;
`;

CareerPosition.displayName = 'CareerPosition';


const CareerEmployerName = styled.h4`
  flex: 25%;
  order: 1;
  margin-bottom: 12px;
`;

CareerEmployerName.displayName = 'CareerEmployerName';


const CareerEmploymentType = styled.p`
  flex: 75%;
  order: 3;
  margin: 0 0 8px 25%;
`;

CareerEmploymentType.displayName = 'CareerEmploymentType';


const CareerDescription = styled.p`
  flex: 75%;
  order: 4;
  margin: 0 0 0 25%;
`;

CareerDescription.displayName = 'CareerDescription';

const CareerURL = styled.a.attrs({
  href: ({ employerURL }) => employerURL || '',
})`
  flex: 75%;
  order: 5; 
  margin: 8px 0 0 25%;
  text-decoration: none;
  color: inherit;
`;

CareerDescription.displayName = 'CareerURL';

export const propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  employerURL: PropTypes.string,
  employerURLText: PropTypes.string,
};

Career.propTypes = propTypes;

Career.defaultProps = {
  position: '',
  employerName: '',
  employmentType: '',
  description: '',
};

export default function Career(props) {
  return (
    <CareerWrapper>
      <CareerEmployerName>{props.employerName}</CareerEmployerName>
      <CareerPosition>{props.position}</CareerPosition>
      <CareerEmploymentType>{props.employmentType}</CareerEmploymentType>
      <CareerDescription>{props.description}</CareerDescription>
      <CareerURL href={props.employerURL}>
        {props.employerURLText}
      </CareerURL>
    </CareerWrapper>
  );
} 