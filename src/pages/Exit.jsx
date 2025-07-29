import { useNavigate } from "react-router-dom";
import PopUser from "../components/popups/pop-user/PopUser";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Wrapper } from "../components/Shared.styled";

const Exit = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // При закрытии модалки возвращаемся на главную или предыдущую страницу
    navigate(-1); // назад в истории
    // или navigate('/') если хотите всегда на главную
  };

  return (
    <Wrapper>
      <Header />
      <Main />
      <div className="add-task-page">
        <PopUser onClose={handleClose} />;
      </div>
    </Wrapper>
  );
};

export default Exit;
