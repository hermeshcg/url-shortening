import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  margin: 10px;
  a {
    text-decoration: none;
    color: hsl(257, 7%, 63%);
  }
  a:hover {
    color: hsl(257, 7%, 90%);
  }
`;
