import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: hsl(257, 27%, 26%);
  width: 70vw;
  height: 50px;
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 80px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 20px;
    width: 50vw;
  }

  button {
    border: none;
    padding: 1px 10px;
    border-radius: 8px;
    background: hsl(180, 66%, 49%);
    color: #fff;
  }
`;
