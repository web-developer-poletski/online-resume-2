import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectImageURL: PropTypes.string,
  projectURL: PropTypes.string,
  projectURLText: PropTypes.string,
};

export const defaultProps = {
  id: '',
  projectName: '',
};

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default function Project({
  id,
  projectName,
  projectImageURL,
  projectURL,
  projectURLText,
  description
}) {
  return (
    <div id={id}>
      <h3>{projectName}</h3>
      <img src={projectImageURL} />
      <p>{description}</p>
      {projectURL &&
        <a href={projectURL}>{projectURLText}</a>
      }
    </div>
  );
}
