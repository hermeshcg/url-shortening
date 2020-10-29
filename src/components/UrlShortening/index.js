import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import Shorted from '../../components/Shorted';

function UrlShortening() {
  const [shortedLink, setshortedLink] = useState('');

  async function handleShortLink(event) {
    event.preventDefault();
    alert(
      'The api is not available, so the shorten links function will not work properly'
    );
    const response = await api.get('/shorten');
    const data = response.data;
    setshortedLink(data[0].shorted);
  }
  console.log(shortedLink);
  return (
    <Container>
      <form onSubmit={handleShortLink}>
        <input type="text" placheholder="Insert an link to short" />
        <button type="submit">Shorten It</button>
        <Shorted shorted={shortedLink} />
      </form>
    </Container>
  );
}

export default UrlShortening;
