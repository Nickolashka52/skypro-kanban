import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./components/GlobalStyles";
import { TaskProvider } from "./hooks/TaskProvider";
import { AuthProvider } from "./hooks/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
