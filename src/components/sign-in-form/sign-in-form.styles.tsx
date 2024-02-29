import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    & > * {
      font-size: 12px;
      padding: 5px 10px;
      min-width: 100px;
    }
    justify-content: space-around;
  }
`;