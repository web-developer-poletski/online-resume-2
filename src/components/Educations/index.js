import React from 'react';
import PropTypes from 'prop-types';

import { Experience, Section } from '../../ui';

const propTypes = {
  educations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    providerName: PropTypes.string.isRequired,
		qualificationType: PropTypes.string.isRequired,
		courseName: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		providerURL: PropTypes.string,
		providerURLText: PropTypes.string,
  })).isRequired,
};

const defaultProps = {
  educations: [],
};

Educations.propTypes = propTypes;
Educations.defaultProps = defaultProps;

export default function Educations(props) {
  const educations = props.educations.map(({
		id,
		providerName,
		qualificationType,
		courseName,
		description,
		providerURL,
		providerURLText,
	}) => <Experience
	  key={id}
	  id={id}
	  title={providerName}
	  brief={courseName}
	  briefDetail={qualificationType}
	  description={description}
	  experienceURL={providerURL}
	  experienceURLText={providerURLText}
  />);

  return (<Section id="educations" title="Educations">{educations}</Section>);
}