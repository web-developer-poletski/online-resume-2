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

SocialFacebook.propTypes = {
  url: PropTypes.string.isRequired,
};

SocialFacebook.defaultProps = {
  url: '',
};

/**
 * Facebook Social
 *
 * @param {object} props
 * @param {string} props.url Facebook profile url
 */
export function SocialFacebook({ url }) {
  return <a href={url}>{url}</a>;
}

Social.Facebook = SocialFacebook;

SocialLinkedin.propTypes = {
  url: PropTypes.string.isRequired,
};

SocialLinkedin.defaultProps = {
  url: '',
};
/**
 * 
 * @param {object} props
 * @param {string} props.url LinkeIn profile url
 */
export function SocialLinkedin({ url }) {
  return <a href={url}>{url}</a>;
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
    facebook: <SocialFacebook {...props} />,
    linkedin: <SocialLinkedin {...props} />,
    mobile: <SocialMobile {...props} />,
  }[type];
}

export const propTypes = {
  type: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    email: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    mobile: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
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
