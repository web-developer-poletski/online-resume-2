import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


Image.Wrapper = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;
Image.Wrapper.displayName = 'Image.Wrapper';


export const propTypes = {
  url: PropTypes.string.isRequired,
};

export const defaultProps = {
  url: '',
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default function Image({ url }) {
  return (<Image.Wrapper src={url} />);
}
