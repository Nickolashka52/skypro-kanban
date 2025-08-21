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
  const [errors, setErrors] = useState({ name: "", login: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", login: "", password: "" };

    if (!name.trim()) {
      newErrors.name =
        "Имя не может быть пустым или состоять только из пробелов";
      isValid = false;
    }

    if (!loginValue.trim()) {
      newErrors.login =
        "Логин не может быть пустым или состоять только из пробелов";
      isValid = false;
    } else if (loginValue.length < 3) {
      newErrors.login = "Логин должен содержать минимум 3 символа";
      isValid = false;
    } else if (!/^[a-zA-Z0-9а-яА-ЯёЁ_]+$/.test(loginValue)) {
      newErrors.login =
        "Логин может содержать только буквы (латинские и русские), цифры и подчеркивание";
      isValid = false;
    }

    if (!passwordValue.trim()) {
      newErrors.password =
        "Пароль не может быть пустым или состоять только из пробелов";
      isValid = false;
    } else if (passwordValue.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    setErrors({ name: "", login: "", password: "" });
    const success = await register(name, loginValue, passwordValue);
    setIsLoading(false);
    if (!success) {
      setErrors({
        name: "",
        login: "",
        password:
          "Ошибка регистрации. Пользователь уже существует или данные некорректны.",
      });
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
              {errors.name && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.name}
                </p>
              )}
              <Input
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                required
              />
              {errors.login && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.login}
                </p>
              )}
              <Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.password}
                </p>
              )}
              <ButtonSignUp id="SignUpEnter" type="submit" disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Зарегистрироваться"}
              </ButtonSignUp>
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
