import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="a">
        <h1>Shortly</h1>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Resources</a>
      </div>
      <div className="b">
        <a href="/">Login</a>
        <button>
          <p>Sign Up</p>
        </button>
      </div>
    </Container>
  );
}

export default Header;
