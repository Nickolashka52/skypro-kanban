import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; // поправь путь, если нужно

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

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(loginValue, passwordValue);
    if (success) {
      setError(null);
      navigate("/"); // редирект на главную после успешного входа
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
              <ButtonEnter id="btnEnter" type="submit">
                Войти
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
