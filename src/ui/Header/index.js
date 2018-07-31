import React from 'react';

import { Section } from '../../ui';

export default function Header(props) {
  return (
    <Section>
      {props.children}
    </Section>
  );
}
