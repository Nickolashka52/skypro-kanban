import "../App.css";
import Header from "../components/header/header";
import Main from "../components/main/Main";
import PopNewCard from "../components/popups/pop-new-card/PopNewCard";
import { Wrapper } from "../components/Shared.styled";

function MainPage() {
  return (
    <Wrapper>
      {/* pop-up start */}

      <PopNewCard />

      {/* pop-up end */}

      <Header />
      <Main />
    </Wrapper>
  );
}

export default MainPage;
