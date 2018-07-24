import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../ui';
import Project, { propTypes as projectPropTypes } from '../Project';

export const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape(projectPropTypes),
  ).isRequired,
};

export const defaultProps = {
  projects: [],
};

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default function Projects(props) {
  const projects = props.projects.map((project) => {
    return (<Project key={project.id} {...project} />);
  });

  return (<Section title="Projects" >{projects}</Section>);
}