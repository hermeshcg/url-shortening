/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { Container } from './styles';

function Shorted({ shorted }) {
  return (
    <Container>
      <p>Your link shorted:</p>
      <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        {shorted}
      </a>
    </Container>
  );
}

export default Shorted;
