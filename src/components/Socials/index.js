/**
 * @module Socials
 */
import React from 'react';
import Social, { propTypes as socialPropTypes } from '../Social';
import PropTypes from 'prop-types';

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

  return (<div>{socials}</div>);
}
