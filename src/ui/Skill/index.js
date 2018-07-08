import React from 'react';
import PropTypes from 'prop-types';

import SkillWrapper from '../SkillWrapper';
import SkillName from '../SkillName';
import SkillPoints from '../SkillPoints';
import EmptyStar from '../EmptyStar';
import FullStar from '../FullStar';

export const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

export const defaultProps = {
  name: '',
  points: 0,
};

Skill.propTypes = propTypes;
Skill.defaultProps = defaultProps;

export default function Skill({ name, points }) {
  let fullStarToRenderLeft = points;
  let emptyStarToRenderLeft = 5 - points;
  let count = 1;
  const stars = [];

  while(fullStarToRenderLeft) {
    stars.push(<FullStar key={count} />);
    fullStarToRenderLeft -= 1;
    count += 1;
  }

  while (emptyStarToRenderLeft) {
    stars.push(<EmptyStar key={count} />);
    emptyStarToRenderLeft -= 1;
    count += 1;
  }

  return (
    <SkillWrapper>
      <SkillName>{name}</SkillName>
      <SkillPoints>{stars}</SkillPoints>
    </SkillWrapper>
  );
}
