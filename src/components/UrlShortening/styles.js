import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: hsl(257, 27%, 26%);
  width: 70vw;
  height: 100px;
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 20px;
    width: 50vw;
    color: hsl(257, 7%, 63%);
  }

  button {
    border: none;
    padding: 1px 10px;
    border-radius: 8px;
    background: hsl(180, 66%, 49%);
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
`;
