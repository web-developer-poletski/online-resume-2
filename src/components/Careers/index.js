import React from 'react';
import PropTypes from 'prop-types';

import {Section} from '../../ui';
import Career, {propTypes as careerPropTypes} from '../Career';

Careers.propTypes = {
	careers: PropTypes.arrayOf(PropTypes.shape(careerPropTypes)).isRequired,
};

Careers.defaultProps = {
	careers: [],
};

export default function Careers(props) {
	const careers = props.careers.map(({id, ...rest}) => <Career key={id} id={id} {...rest} />);

	return <Section title="Careers"> {careers} </Section>;
}
