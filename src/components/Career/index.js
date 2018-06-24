import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  position: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  employerURL: PropTypes.string,
  employerURLText: PropTypes.string,
}

Career.propTypes = propTypes;

Career.defaultProps = {
  position: '',
  employerName: '',
  employmentType: '',
  description: '',
};

export default function Career(props) {
  return (
    <div>
      <h4>{props.position}</h4>
      <p>{props.employerName}</p>
      <p>{props.employmentType}</p>
      <p>{props.description}</p>
      <a href={props.employerURL}>{props.employerURLText}</a>
    </div>
  );
} 