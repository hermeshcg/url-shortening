import React, { useState } from 'react';

import { Container } from './styles';

function UrlShortening() {
  const [link, setLink] = useState('');
  /*   const [shortedLink, setshortedLink] = useState('');
  
    async function handleShortLink(event) {
    event.preventDefault();
    const response = await api.post('/api/v1/shorten', link);
    const data = response.data;
    setshortedLink(data);
  }
  console.log(shortedLink); */
  return (
    <Container>
      <form onSubmit={() => {}}>
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
