import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    display: block;
  }
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 500px;

  @media screen and (max-width: 768px) {
    min-width: unset;
    font-size: 15px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: 35%;
  margin-top: 8%;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 15px;
  }
`;
