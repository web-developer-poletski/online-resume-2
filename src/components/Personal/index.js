import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Section } from '../../ui';

const Column = styled.div`
  flex: 1;
`;

Personal.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  loaction: PropTypes.string.isRequired,
  personalStatement: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
};

export default function Personal(props) {
  return (
    <Section>
      <Column>
        <Section.Subtitle>
          About
        </Section.Subtitle>
        <p>{props.personalStatement}</p>
      </Column>

      <Column>
        <img src={props.photoURL} alt="" />
      </Column>

      <Column>
        <Section.Subtitle>
          Details
        </Section.Subtitle>
        <p>Name</p>
        <p>{props.firstName} {props.lastName}</p>

        <p>Location</p>
        <p>{props.location}</p>
      </Column>
    </Section>
  );
}