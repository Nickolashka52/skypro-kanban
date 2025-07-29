import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (login, password) => {
    if (login === "admin" && password === "admin") {
      setIsAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
