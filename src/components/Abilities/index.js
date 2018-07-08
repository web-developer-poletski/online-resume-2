import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  SkillGroup,
} from '../../ui';

export const propTypes = {
  technicalSkills: PropTypes.array.isRequired,
};

export const defaultProps = {
  technicalSkills: [],
};

export default function Abilities({ technicalSkills }) {
  return (
    <Section title="Abilities">
      <SkillGroup
        title="Technical Skills"
        skills={technicalSkills}
      />
    </Section>
  );
}