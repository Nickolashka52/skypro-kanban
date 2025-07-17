import { Link } from "react-router-dom";
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
  // StyledLink, // если хотите использовать стилизованную ссылку
} from "./Register.styled";

const Register = () => {
  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <FormLogin id="formLogUp" action="#">
              <Input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <Input
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ButtonSignUp id="SignUpEnter" type="submit">
                Зарегистрироваться
              </ButtonSignUp>
              <FormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  {/* Или <StyledLink to="/login">Войдите здесь</StyledLink> */}
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
