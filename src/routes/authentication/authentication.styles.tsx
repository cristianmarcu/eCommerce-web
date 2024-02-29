import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  & > * {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
