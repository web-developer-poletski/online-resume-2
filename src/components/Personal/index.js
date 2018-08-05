import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../helpers';
import { Image, Section } from '../../ui';

const Column = styled.div `
  flex: 1;
  ${media.phone`
    flex: none;
  `}
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;
Detail.displayName = 'Detail';

Detail.Name = styled.div`
  flex: 1;
`;
Detail.Name.displayName = 'Detail.Name';

Detail.Text = styled.div`
  flex: 2;
  text-align: right;
`;
Detail.Text.displayName = 'Detail.Text';


Personal.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  personalStatement: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired
};

Personal.defaultProps = {
  firstName: '',
  lastName: '',
  location: '',
  personalStatement: '',
  photoURL: ''
};

export default function Personal(props) {
  return (
    <Section id="personal">
      <Column>
        <Image url={props.photoURL} alt=""/>
      </Column>

      <Column>
        <Section.Subtitle>
          Details
        </Section.Subtitle>
        <Detail>
          <Detail.Name>Name</Detail.Name>
          <Detail.Text>{props.firstName} {props.lastName}</Detail.Text>
        </Detail>

        <Detail>
          <Detail.Name>Location</Detail.Name>
          <Detail.Text>{props.location}</Detail.Text>
        </Detail>
      </Column>

      <Column>
        <Section.Subtitle>
          About
        </Section.Subtitle>
        <p>{props.personalStatement}</p>
      </Column>
    </Section>
  );
}