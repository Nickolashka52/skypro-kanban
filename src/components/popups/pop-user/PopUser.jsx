import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {
  PopExit,
  PopExitContainer,
  PopExitTitle,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopUser.styled";

const PopUser = ({ onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleExitYes = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  const handleExitNo = (e) => {
    e.preventDefault();
    if (onClose) onClose();
  };

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitTitle>
          <h2>Выйти из аккаунта?</h2>
        </PopExitTitle>
        <form id="formExit" action="#">
          <PopExitFormGroup>
            <PopExitYes onClick={handleExitYes}>Да, выйти</PopExitYes>
            <PopExitNo onClick={handleExitNo}>Нет, остаться</PopExitNo>
          </PopExitFormGroup>
        </form>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopUser;
