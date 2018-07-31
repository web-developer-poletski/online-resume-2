import React from 'react';

import { Section } from '../../ui';

export default function Footer(props) {
  return (
    <Section>
      {props.children}
    </Section>
  );
}