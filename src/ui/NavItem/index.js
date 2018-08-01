import React from 'react';
import PropTypes from 'prop-types';

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
  return (<li><a href={link}>{title}</a></li>);
}
