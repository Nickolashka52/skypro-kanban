// pages/AddTask.jsx
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import PopNewCard from "../components/popups/pop-new-card/PopNewCard";
import { Wrapper } from "../components/Shared.styled";
import Main from "../components/main/Main";

const AddTask = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Возвращаемся назад по истории браузера
  };

  return (
    <Wrapper>
      <Header />
      <Main />
      <div className="add-task-page">
        <PopNewCard onClose={handleClose} />
      </div>
    </Wrapper>
  );
};

export default AddTask;
