import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: hsl(260, 8%, 14%);
  padding: 50px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 26px;
  }

  .summary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #fff;

    .features {
      padding-right: 20px;
      p {
        margin-top: 7px;
        font-size: 12px;
        color: #ccc;
      }
    }
    .resources {
      padding: 0 20px;
      p {
        margin-top: 7px;
        font-size: 12px;
        color: #ccc;
      }
    }
    .company {
      padding-left: 20px;
      p {
        margin-top: 7px;
        font-size: 12px;
        color: #ccc;
      }
    }
  }

  .social-medias {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sm {
      margin: 0 5px;
    }
  }
`;
