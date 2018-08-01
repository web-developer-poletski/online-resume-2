import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
} from '../../ui';

export const propTypes = {
  children: PropTypes.element,
};

export default function Abilities({
  children,
}) {
  return (
    <Section id="abilities" title="Abilities">
      {children}
    </Section>
  );
}