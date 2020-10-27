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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 70vw;
    margin: 40px 0;

    .circle {
      indow-icon-container {
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
        background-position: 50%;
        background-size: 50%;
      }
    }
  }
`;
