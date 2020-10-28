import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: hsl(257, 27%, 26%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    position: absolute;
    top: 0px;
    z-index: 3;

    h1 {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }

    button {
      margin-top: 20px;
      border: none;
      height: 50px;
      padding: 0 60px;
      border-radius: 16px;
      background: hsl(180, 66%, 49%);
      transition: 0.2s;
      color: #fff;
      font-size: 14px;
    }
    button:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
