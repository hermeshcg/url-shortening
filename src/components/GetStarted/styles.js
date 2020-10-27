import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  main {
    h1 {
      font-size: 30px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: hsl(257, 7%, 63%);
    }
    button {
      margin-top: 10px;
      border: none;
      padding: 0 20px;
      border-radius: 16px;
      background: hsl(180, 66%, 49%);
      transition: 0.2s;
      p {
        font-size: 20px;
        color: #fff;
      }
    }
    button:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
