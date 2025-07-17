import "../App.css";
import { GlobalStyles } from "../components/GlobalStyles";
import Header from "../components/header/header";
import Main from "../components/main/Main";
import PopBrowse from "../components/popups/pop-browse/PopBrowse";
import PopNewCard from "../components/popups/pop-new-card/PopNewCard";
import { Wrapper } from "../components/Shared.styled";

function MainPage() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* pop-up start */}

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end */}

        <Header />

        <Main />
      </Wrapper>
    </>
  );
}

export default MainPage;
