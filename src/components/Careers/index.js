import React from 'react';
import PropTypes from 'prop-types';

import { Experience, Section } from '../../ui';

const propsTypes = {
	careers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
		employerName: PropTypes.string.isRequired,
		employmentType: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		employerURL: PropTypes.string,
		employerURLText: PropTypes.string,
	})).isRequired,
};

const defaultProps = {
	careers: [],
};

Careers.propTypes = propsTypes;
Careers.defaultProps = defaultProps;

export default function Careers(props) {
	const careers = props.careers.map(({
		id,
		employerName,
		employmentType,
		position,
		description,
		employerURL,
		employerURLText,
		startDate,
	}) => <Experience
	  key={id}
	  id={id}
	  title={employerName}
	  brief={position}
	  briefDetail={employmentType}
	  description={description}
	  experienceURL={employerURL}
		experienceURLText={employerURLText}
		startDate={startDate}
	/>);

	return <Section id="careers" title="Careers">{careers}</Section>;
}
