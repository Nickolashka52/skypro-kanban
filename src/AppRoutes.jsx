import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import AddTask from "./pages/AddTask";
import Exit from "./pages/Exit";
import NotFoundPage from "./pages/NotFoundPage";
import AuthProvider from "./hooks/AuthProvider";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/card/:id"
          element={
            <PrivateRoute>
              <CardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/add-task"
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
        />

        <Route
          path="/exit"
          element={
            <PrivateRoute>
              <Exit />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
