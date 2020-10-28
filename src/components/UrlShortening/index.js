import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';

function UrlShortening() {
  const [link, setLink] = useState('');

  async function handleShortLink(event) {
    event.preventDefault();
    const response = await api.post('/v4/shorten', { long_url: link });
    console.log(response.data);
  }

  return (
    <Container>
      <form onSubmit={handleShortLink}>
        <input
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placheholder="Insert an link to short"
        />
        <button type="submit">Shorten It</button>
      </form>
    </Container>
  );
}

export default UrlShortening;
