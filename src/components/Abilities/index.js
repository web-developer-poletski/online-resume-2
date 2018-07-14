import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  SkillGroup,
} from '../../ui';

export const propTypes = {
  technicalSkills: PropTypes.array.isRequired,
  technicalSkillsOrderByIds: PropTypes.array,
};

export const defaultProps = {
  technicalSkills: [],
};

export default function Abilities({
  technicalSkills,
  technicalSkillsOrderByIds,
}) {
  return (
    <Section title="Abilities">
      <SkillGroup
        title="Technical Skills"
        skills={technicalSkills}
        skillsOrderByIds={technicalSkillsOrderByIds}
      />
    </Section>
  );
}