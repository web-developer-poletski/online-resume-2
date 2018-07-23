import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Skill, { propTypes as skillPropTypes } from '../Skill';

SkillGroup.Wrapper = styled.div`
  width: 100%;
`;
SkillGroup.Wrapper.displayName = 'SkillGroup.Wrapper';

SkillGroup.Title = styled.h3`
  font-size: 20px;
`;
SkillGroup.Title.displayName = 'SkillGroup.Title';

SkillGroup.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 2;
`;
SkillGroup.List.displayName = 'SkillGroupList';

export const propTypes = {
  title: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.shape(skillPropTypes)).isRequired,
  skillsOrderByIds: PropTypes.arrayOf(PropTypes.string),
};

export const defaultProps = {
  skills: [],
};

SkillGroup.propTypes = propTypes;
SkillGroup.defaultProps = defaultProps;

export default function SkillGroup(props) {
  let skillsData = props.skills;

  if (Array.isArray(props.skillsOrderByIds)) {
    skillsData = props.skillsOrderByIds.map((skillId, indx, arr) => {
      return skillsData.find(({ id }) => id === skillId );
    });
  }

  let skills = skillsData.map((props) => <Skill key={props.id} {...props} />);

  return (
    <SkillGroup.Wrapper>
      <SkillGroup.Title>{props.title}</SkillGroup.Title>
      <SkillGroup.List>
        {skills}
      </SkillGroup.List>
    </SkillGroup.Wrapper>
  );
}
