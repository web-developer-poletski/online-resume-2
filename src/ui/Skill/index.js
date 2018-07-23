import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmptyStar from '../EmptyStar';
import FullStar from '../FullStar';

// ----- STYLED COMPONENTS START -----
Skill.Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;
Skill.Wrapper.displayName = 'Skill.Wrapper';

Skill.Name = styled.span`
  flex: 1;
`;
Skill.Name.displayName = 'Skill.Name';

Skill.Points = styled.span`
  flex: 1;
  text-align: right;
`;
Skill.Points.displayName = 'Skill.Points';
// ----- STYLED COMPONENTS END -----

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
    <Skill.Wrapper>
      <Skill.Name>{name}</Skill.Name>
      <Skill.Points>{stars}</Skill.Points>
    </Skill.Wrapper>
  );
}
