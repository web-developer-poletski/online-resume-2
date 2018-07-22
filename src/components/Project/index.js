import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};

export const defaultProps = {
  id: '',
  projectName: '',
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default function Project({ id, projectName, description }) {
  return (
    <div id={id}>
      <h3>{projectName}</h3>
      <p>{description}</p>
    </div>
  );
}