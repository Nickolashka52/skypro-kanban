import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/popups/pop-browse/PopBrowse";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Wrapper } from "../components/Shared.styled";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // возвращаемся назад по истории
  };

  return (
    <Wrapper>
      <Header />
      <Main />
      <div>
        <PopBrowse id={id} onClose={handleClose} />
      </div>
    </Wrapper>
  );
};

export default CardPage;
