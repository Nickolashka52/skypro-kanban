import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Message, Button } from "./notFound.styled";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>404</Title>
      <Message>Извините, страница не найдена.</Message>
      <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
    </Wrapper>
  );
};

export default NotFound;
