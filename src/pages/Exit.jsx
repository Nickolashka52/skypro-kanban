import { useNavigate } from "react-router-dom";
import PopUser from "../components/popups/pop-user/PopUser";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Wrapper } from "../components/Shared.styled";

const Exit = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
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
