import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #eee;
  border-radius: 16px;

  a {
    text-decoration: none;
    font-size: 14px;
    color: hsl(257, 7%, 63%);
    cursor: not-allowed;
  }

  .a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 30px;
      font-weight: bold;
      margin: 0 20px;
    }

    a {
      margin: 0 20px;
    }
  }

  .b {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      margin: 0 20px;
    }
    button {
      margin: 10px;
      color: #fff;
      border: none;
      width: 100%;
      padding: 0 20px;
      border-radius: 16px;
      background: hsl(180, 66%, 49%);
      transition: 0.2s;
    }
    button:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
