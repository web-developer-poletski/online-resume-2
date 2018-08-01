import React from 'react';
import PropTypes from 'prop-types';

import NavItem from '../NavItem';

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

  return (<ul>{navItems}</ul>);
}
