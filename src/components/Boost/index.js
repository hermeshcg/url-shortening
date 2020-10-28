import React from 'react';

import { Container } from './styles';

import bg from '../../images/bg-boost-desktop.svg';

function Boost() {
  return (
    <Container>
      <img src={bg} alt="background" />
      <section>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </section>
    </Container>
  );
}

export default Boost;
