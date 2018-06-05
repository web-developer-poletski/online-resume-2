import React from 'react';
import PropTypes from 'prop-types';

import SectionContainer from '../SectionContainer';
import SectionTitle from '../SectionTitle';
import SectionWrapper from '../SectionWrapper';


Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

export default function Section(props) {
  const { children, title } = props;
  return (
    <SectionWrapper>
      <SectionContainer>

        {title && <SectionTitle>{title}</SectionTitle>}

        {children}
      </SectionContainer>
    </SectionWrapper>
  );
}
