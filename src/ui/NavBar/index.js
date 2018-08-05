import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavItem from '../NavItem';


NavBar.NavItemList = styled.ul`
  margin: 0;
  padding: 8px 0;
  list-style: none;
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
`;
NavBar.NavItemList.displayName = 'NavBar.NavItemList';


export const propTypes = {
  navItems: PropTypes.array.isRequired,
};

export const defaultProps = {
  navItems: [],
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default function NavBar(props) {
  const navItems = props.navItems.map((navItem) =>
    <NavItem key={navItem.link} {...navItem} />);

  return (<NavBar.NavItemList>{navItems}</NavBar.NavItemList>);
}
