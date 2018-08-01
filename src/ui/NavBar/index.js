import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavItem from '../NavItem';


NavBar.NavItemList = styled.ul`
  padding: 0;
  list-style: none;
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
