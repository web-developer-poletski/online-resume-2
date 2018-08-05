import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../helpers';

// ----- STYLED COMPONENTS START -----
Section.Body = styled.div `
  display: flex;
  flex-flow: ${({ align }) => {
    if (align === 'vertical') {
      return 'column'
    }

    return 'row';
  }};
  ${media.phone`
    display: block;
  `}
`;
Section.Body.displayName = 'Section.Body';

Section.Container = styled.div `
  margin: 0 auto;
  max-width: 800px;
  ${media.phone`
    padding-left: 15px;
    padding-right: 15px;
    max-width: 100%;
  `}
`;
Section.Container.displayName = 'Section.Container';

Section.Title = styled.h2 `
  font-size: 24px;
`;
Section.Title.displayName = 'Section.Title';

Section.Subtitle = styled.h3 `
  flex: 100%;
  font-size: 20px;
`;
Section.Subtitle.displayName = 'Section.Subtitle';

Section.Wrapper = styled.section ``;
Section.Wrapper.displayName = 'Section.Wrapper';
// ----- STYLED COMPONENTS END -----

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  id: PropTypes.string,
  align: PropTypes.string,
  title: PropTypes.string,
};

Section.defaultProps = {
  title: '',
};

export default function Section({
  id,
  align,
  children,
  title,
}) {
  return (
    <Section.Wrapper id={id} >
      <Section.Container>
        {title && <Section.Title>{title}</Section.Title>}
        
        <Section.Body align={align}>
          {children}
        </Section.Body>
      
      </Section.Container>
    </Section.Wrapper>
  );
}
