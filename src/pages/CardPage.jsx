import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/popups/pop-browse/PopBrowse";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // возвращаемся назад по истории
  };

  return (
    <div>
      <PopBrowse id={id} onClose={handleClose} />
    </div>
  );
};

export default CardPage;
