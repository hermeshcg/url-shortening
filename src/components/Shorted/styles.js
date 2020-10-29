import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid hsl(0, 87%, 67%);
  color: hsl(0, 87%, 67%);
  margin: 10px 0;
  padding-top: 5px;
  a {
    text-decoration: none;
    color: hsl(257, 7%, 63%);
  }
  a:hover {
    color: hsl(257, 7%, 90%);
  }
`;
