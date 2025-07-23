import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
