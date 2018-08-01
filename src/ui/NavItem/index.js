import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


NavItem.Wrapper = styled.li`
  display: inline-block;
  padding: 2px 4px;
`;
NavItem.Wrapper.displayName = 'NavItem.Wrapper';

NavItem.Link = styled.a`
  text-decoration: none;
`;
NavItem.Link.displayName = 'NavItem.Link';


export const propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export const defaultProps = {
  title: '',
  link: '#',
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default function NavItem({ title, link }) {
  return (
    <NavItem.Wrapper>
      <NavItem.Link href={link}>
        {title}
      </NavItem.Link>
    </NavItem.Wrapper>)
  ;
}
