import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../ui';
import Career, { propTypes as careerPropTypes } from '../Career';

Careers.propTypes = {
  careers: PropTypes.arrayOf(PropTypes.shape(careerPropTypes)).isRequired,
}

Careers.defaultProps = {
  careers: [],
}

export default function Careers(props) {
  const careers = props.careers.map((career) => (
    <Career key={career.id} {...career} />
  ));

  return (
    <Section title="Careers">
      {careers}
    </Section>
  );
}