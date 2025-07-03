import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/header/header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/pop-browse/PopBrowse";
import PopNewCard from "./components/popups/pop-new-card/PopNewCard";
import PopUser from "./components/popups/pop-user/PopUser";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        {/* pop-up start */}

        <PopUser />

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end */}

        <Header />

        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
