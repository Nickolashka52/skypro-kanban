import { useNavigate } from "react-router-dom";
import PopUser from "../components/popups/pop-user/PopUser";

const Exit = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // При закрытии модалки возвращаемся на главную или предыдущую страницу
    navigate(-1); // назад в истории
    // или navigate('/') если хотите всегда на главную
  };

  return <PopUser onClose={handleClose} />;
};

export default Exit;
