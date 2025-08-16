import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalTitle,
  FormLogin,
  Input,
  ButtonSignUp,
  FormGroup,
} from "./Register.styled";

const Register = () => {
  const [name, setName] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const success = await register(name, loginValue, passwordValue);
    setIsLoading(false);
    if (!success) {
      setError(
        "Ошибка регистрации. Пользователь уже существует или данные некорректны."
      );
    }
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <FormLogin id="formLogUp" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                required
              />
              <Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />
              <ButtonSignUp id="SignUpEnter" type="submit" disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Зарегистрироваться"}
              </ButtonSignUp>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <FormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </FormGroup>
            </FormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default Register;
