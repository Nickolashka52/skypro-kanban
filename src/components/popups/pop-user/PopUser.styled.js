import styled from "styled-components";

export const PopExit = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed; /* рекомендую fixed */
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4); /* затемнение фона */
  align-items: center;
  justify-content: center;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 50px 60px;
  background: #ffffff;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    display: block;
  }
`;

const buttonStyles = `
  width: 153px;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const PopExitYes = styled.button`
  ${buttonStyles}
  background-color: #565eef;
  color: #ffffff;
  margin-right: 10px;
  border: none;

  &:hover {
    background-color: #33399b;
  }
`;

export const PopExitNo = styled.button`
  ${buttonStyles}
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
