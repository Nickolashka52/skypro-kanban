import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const LogoLight = styled.div`
  &.header__logo {
    &._show._light {
      /* если нужны стили для видимости, можно добавить */
    }
  }

  a {
    display: inline-block;
  }

  img {
    width: 85px;
    display: block;
  }
`;

export const LogoDark = styled.div`
  &.header__logo {
    &._dark {
      /* если нужны стили для темного лого */
    }
  }

  a {
    display: inline-block;
  }

  img {
    width: 85px;
    display: block;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  outline: none;

  a {
    color: #ffffff;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 30px;
  }

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  cursor: pointer;
  position: relative;
  padding-right: 10px; /* чтобы стрелка не налезала на текст */

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform-origin: center;
    transform: translateY(-50%) rotate(-45deg);
    transition: border-color 0.3s ease;
  }

  &:hover,
  &._hover02:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const PopUserSet = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  /* Чтобы отображать через inline стиль из компонента */
  &.visible {
    display: block;
  }
`;

export const PopUserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;

  a {
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &:hover,
  &._hover03:hover {
    background-color: #33399b;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;
