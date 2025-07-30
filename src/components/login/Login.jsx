import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTitle,
  FormLogin,
  Input,
  ButtonEnter,
  FormGroup,
} from "./Login.styled";

const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Добавлено для состояния загрузки

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Показываем состояние загрузки
    setError(null);
    const success = await login(loginValue, passwordValue); // Асинхронный вызов
    setIsLoading(false); // Скрываем состояние загрузки
    if (success) {
      navigate("/"); // Редирект на главную после успешного входа
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
            <FormLogin id="formLogIn" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                required
              />
              <Input
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />
              <ButtonEnter id="btnEnter" type="submit" disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Войти"}
              </ButtonEnter>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </FormGroup>
            </FormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Login;
