import { useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext"; // Импортируем существующий контекст

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверяем наличие токена и пользователя при загрузке приложения
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setIsAuth(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Функция входа
  const login = async (loginValue, passwordValue) => {
    try {
      const response = await loginUser({
        login: loginValue,
        password: passwordValue,
      });
      if (response.status === 201) {
        const { token, ...userData } = response.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setIsAuth(true);
        setUser(userData);
        return true;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
    return false;
  };

  // Функция регистрации
  const register = async (name, loginValue, passwordValue) => {
    try {
      const response = await registerUser({
        name,
        login: loginValue,
        password: passwordValue,
      });
      if (response.status === 201) {
        const { token, ...userData } = response.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setIsAuth(true);
        setUser(userData);
        navigate("/");
        return true;
      }
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
    return false;
  };

  // Функция выхода
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
