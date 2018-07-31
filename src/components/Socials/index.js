/**
 * @module Socials
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Social, { propTypes as socialPropTypes } from '../Social';


Socials.Wrapper = styled.div`
  width: 100%;
  columns: 2;
`;

export const propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape(socialPropTypes)).isRequired,
};
export const defaultProps = {
  socials: [],
};

Socials.propTypes = propTypes;
Socials.defaultProps = defaultProps;

/**
 * 
 * @param {object} props
 * @param {Object[]} props.socials
 * @param {string} props.socials.type
 * @param {object} props.socials.properties
 */
export default function Socials(props) {
  const socials = props.socials.map((social) =>
    <Social key={social.id} {...social} />);

  return (<Socials.Wrapper>{socials}</Socials.Wrapper>);
}
