import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../helpers';
import Skill, { propTypes as skillPropTypes } from '../Skill';

// ----- STYLED COMPONENT START -----
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
  ${media.phone`
    columns: 1;
  `}
`;
SkillGroup.List.displayName = 'SkillGroupList';
// ----- STYLED COMPONENTS END -----

export const propTypes = {
  title: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.shape(skillPropTypes)).isRequired,
};

export const defaultProps = {
  skills: [],
};

SkillGroup.propTypes = propTypes;
SkillGroup.defaultProps = defaultProps;

/**
 * 
 * @param {object} props
 * @param {string} [props.title]
 * @param {Object[]} [props.skills="[]"]
 * @param {string} props.skills[].id Skill id
 * @param {string} props.skills[].name Skill name
 * @param {number} props.skills[].points Skill score
 */
export default function SkillGroup(props) {
  const skills = props.skills.map((skill) => <Skill key={skill.id} {...skill} />);

  return (
    <SkillGroup.Wrapper>
      {props.title && <SkillGroup.Title>{props.title}</SkillGroup.Title>}

      <SkillGroup.List>
        {skills}
      </SkillGroup.List>
    </SkillGroup.Wrapper>
  );
}
