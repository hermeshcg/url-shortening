import React from 'react';

import { Container } from './styles';

function UrlShortening() {
  return (
    <Container>
      <form>
        <input type="text" placheholder="Insert an link to short" />
        <button type="submit">Shorten It</button>
      </form>
    </Container>
  );
}

export default UrlShortening;
