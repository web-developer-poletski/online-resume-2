import React from 'react';
import PropTypes from 'prop-types';

import SectionBody from '../SectionBody';
import SectionContainer from '../SectionContainer';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionWrapper from '../SectionWrapper';

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  align: PropTypes.string,
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

Section.Title = SectionTitle;
Section.Subtitle = SectionSubtitle;

export default function Section(props) {
  const { children, title } = props;
  return (
    <SectionWrapper>
      <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        
        <SectionBody align={props.align}>
          {children}
        </SectionBody>
      
      </SectionContainer>
    </SectionWrapper>
  );
}
