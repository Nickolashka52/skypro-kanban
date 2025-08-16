import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/popups/pop-browse/PopBrowse";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Wrapper } from "../components/Shared.styled";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Header />
      <Main />
      <PopBrowse id={id} onClose={handleClose} />
    </Wrapper>
  );
};

export default CardPage;
