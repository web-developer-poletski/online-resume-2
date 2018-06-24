import styled from 'styled-components';

const SectionBody = styled.div`
  display: flex;
  flex-flow: ${({ align }) => {
    if (align === 'vertical') {
      return 'column'
    }

    return 'row';
  }};
`;

export default SectionBody;