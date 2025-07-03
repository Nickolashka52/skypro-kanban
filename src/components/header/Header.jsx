import { useState } from "react";
import {
  HeaderWrapper,
  Container,
  HeaderBlock,
  LogoLight,
  LogoDark,
  HeaderNav,
  BtnMainNew,
  HeaderUser,
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./Header.styled";

const Header = () => {
  const [isUserPopVisible, setIsUserPopVisible] = useState(false);

  const toggleUserPop = (e) => {
    e.preventDefault();
    setIsUserPopVisible((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <LogoLight className="header__logo _show _light">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo.png" alt="logo" />
            </a>
          </LogoLight>
          <LogoDark className="header__logo _dark">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>
          <HeaderNav>
            <BtnMainNew className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </BtnMainNew>
            <HeaderUser href="#user-set-target" className="_hover02" onClick={toggleUserPop}>
              Ivan Ivanov
            </HeaderUser>
            <PopUserSet
              id="user-set-target"
              style={{ display: isUserPopVisible ? "block" : "none" }}
              className="pop-user-set"
            >
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </PopUserTheme>
              <PopUserButton type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </PopUserButton>
            </PopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
