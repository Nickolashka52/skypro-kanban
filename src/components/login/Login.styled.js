import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
  font-family: "Roboto", sans-serif;
`;

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:first-child {
    margin-bottom: 7px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  font-family: "Roboto", sans-serif;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const ButtonEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const FormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

// Если хотите стилизовать Link отдельно, можно экспортировать так:
export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  cursor: pointer;

  &:hover {
    color: rgba(148, 166, 190, 0.6);
  }
`;
