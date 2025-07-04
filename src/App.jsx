import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/header/header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/pop-browse/PopBrowse";
import PopNewCard from "./components/popups/pop-new-card/PopNewCard";
import PopUser from "./components/popups/pop-user/PopUser";
import { Wrapper } from "./components/Shared.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* pop-up start */}

        <PopUser />

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end */}

        <Header />

        <Main />
      </Wrapper>
    </>
  );
}

export default App;
