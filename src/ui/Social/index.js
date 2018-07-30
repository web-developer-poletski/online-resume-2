import React from 'react';
import PropTypes from 'prop-types';


SocialMobile.propTypes = {
  mobile: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

SocialMobile.defaultProps = {
  mobile: '',
};

/**
 * Mobile Social
 *
 * @param {object} props
 * @param {string|number} props.mobile
 */
export function SocialMobile({ mobile }) {
  return (<div>{mobile}</div>);
}

Social.Mobile = SocialMobile;

SocialEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

SocialEmail.defaultProps = {
  email: '',
}

/**
 * Email Social
 *
 * @param {object} props
 * @param {string} props.email
 */
export function SocialEmail({ email }) {
  return <a href={`mailto:${email}`}>{email}</a>;
}

Social.Email = SocialEmail;


SocialLinkedin.propTypes = {
  reference: PropTypes.string.isRequired,
};

SocialLinkedin.defaultProps = {
  reference: '',
};
/**
 * 
 * @param {object} props
 * @param {string} props.reference
 */
export function SocialLinkedin({ reference }) {
  return <a href={reference}>{reference}</a>;
}

Social.Linkedin = SocialLinkedin;

/**
 * Returns specific social component
 *
 * @param {object} config
 * @param {string} config.type
 */
export function getSocialByType({ type, ...props }) {
  return {
    email: <SocialEmail {...props} />,
    linkedin: <SocialLinkedin {...props} />,
    mobile: <SocialMobile {...props} />,
  }[type];
}

export const propTypes = {
  type: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export const defaultProps = {
  type: '',
  properties: {},
};

Social.propTypes = propTypes;
Social.defaultProps = defaultProps;

/**
 * Social
 *
 * @param {object} props
 * @param {string} props.type
 * @param {object} props.properties
 * @param {string} [props.properties.email]
 */
export default function Social({ type, properties }) {
  return (<div>{getSocialByType({ type, ...properties })}</div>);
}
