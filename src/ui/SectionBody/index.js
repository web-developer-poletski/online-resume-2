import styled from 'styled-components';

const SectionBody = styled.div `
  display: flex;
  flex-flow: ${({ align }) => {
    if (align === 'vertical') {
      return 'column'
    }

    return 'row';
  }};
`;

SectionBody.displayName = 'SectionBody';

export default SectionBody;