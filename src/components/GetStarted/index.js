import React from 'react';

import { Container } from './styles';

import getStartedImage from '../../images/illustration-working.svg';

function GetStarted() {
  return (
    <Container>
      <main>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>
          <p>Get Started</p>
        </button>
      </main>
      <img src={getStartedImage} alt="" />
    </Container>
  );
}

export default GetStarted;
