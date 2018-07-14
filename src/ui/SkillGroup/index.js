import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Skill, { propTypes as skillPropTypes } from '../Skill';

export const SkillGroupWrapper = styled.div`
  width: 100%;
`;

SkillGroupWrapper.displayName = 'SkillGroupWrapper';

export const SkillGroupTitle = styled.h3`
  font-size: 20px;
`;

SkillGroupTitle.displayName = 'SkillGroupTitle';

export const SkillGroupList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 2;
`;

SkillGroupList.displayName = 'SkillGroupList';

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

SkillGroup.Title = SkillGroupTitle;
SkillGroup.List = SkillGroupList;

export default function SkillGroup(props) {
  let skillsData = props.skills;

  if (Array.isArray(props.skillsOrderByIds)) {
    skillsData = props.skillsOrderByIds.map((skillId, indx, arr) => {
      return skillsData.find(({ id }) => id === skillId );
    });
  }

  let skills = skillsData.map((props) => <Skill key={props.id} {...props} />);

  return (
    <SkillGroupWrapper>
      <SkillGroupTitle>{props.title}</SkillGroupTitle>
      <SkillGroupList>
        {skills}
      </SkillGroupList>
    </SkillGroupWrapper>
  );
}
