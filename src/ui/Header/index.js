import React from 'react';
import styled from 'styled-components';


Header.Wrapper = styled.div`
  width: 100%;
  background-color: rgb(150, 150, 150);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
`;
Header.Wrapper.displayName = 'Header.Wrapper';

export default function Header(props) {
  return (
    <Header.Wrapper>
      {props.children}
    </Header.Wrapper>
  );
}
