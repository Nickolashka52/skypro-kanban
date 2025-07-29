import "../App.css";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Wrapper } from "../components/Shared.styled";

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default MainPage;
