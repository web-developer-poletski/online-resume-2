import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Skill, { propTypes as skillPropTypes } from '../Skill';

export const SkillGroupWrapper = styled.div``;

SkillGroupWrapper.displayName = 'SkillGroupWrapper';

export const SkillGroupTitle = styled.h3`
  font-size: 20px;
`;

SkillGroupTitle.displayName = 'SkillGroupTitle';

export const SkillGroupList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

SkillGroupList.displayName = 'SkillGroupList';

export const propTypes = {
  title: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.shape(skillPropTypes)).isRequired,
};

export const defaultProps = {
  skills: [],
};

SkillGroup.propTypes = propTypes;
SkillGroup.defaultProps = defaultProps;

SkillGroup.Title = SkillGroupTitle;
SkillGroup.List = SkillGroupList;

export default function SkillGroup({ title, skills }) {
  const skillsCount = skills.length;
  let lastSkillIndexOfFirstList;

  if (skillsCount % 2 === 0) {
    lastSkillIndexOfFirstList = skillsCount / 2 - 1;
  } else {
    lastSkillIndexOfFirstList = ( skillsCount - 1 ) / 2;
  }

  const firstSkillList = skills
    .slice(0, lastSkillIndexOfFirstList + 1)
    .map((props) => <Skill key={props.id} {...props} />);

  const secondSkillList = skills
    .slice(lastSkillIndexOfFirstList + 1)
    .map((props) => <Skill key={props.id} {...props} />);
 

  return (
    <SkillGroupWrapper>
      <SkillGroupTitle>{title}</SkillGroupTitle>
      <SkillGroupList>
        {firstSkillList}
      </SkillGroupList>
      <SkillGroupList>
        {secondSkillList}
      </SkillGroupList>
    </SkillGroupWrapper>
  );
}
