import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: hsl(257, 7%, 63%);
  }
  section {
    display: flex;
    margin: 80px 10px;
    align-items: center;
    justify-content: center;

    .window {
      background-color: #fff;
      margin-bottom: 60px;
      text-align: center;
      padding: 50px 20px 30px;
      position: relative;
    }

    .window-icon-container {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: hsl(257, 27%, 26%);
      content: '';
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      img {
        margin: 9px 0 6px 0;
      }
    }

    .window-text {
      color: hsl(257, 7%, 63%);
      font-size: 0.9em;
      margin-top: 8px;
    }
  }
`;
