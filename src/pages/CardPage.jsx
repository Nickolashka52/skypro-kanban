import { useParams } from "react-router-dom";
import Card from "../components/card/Card";

const CardPage = () => {
  const { id } = useParams();

  // Здесь нужно получить данные карточки по id.
  // Пока можно заглушку:
  const cardData = {
    id,
    themeClass: "_blue",
    topic: "Тема карточки",
    link: "https://example.com",
    title: "Заголовок карточки",
    date: "2024-06-01",
  };

  // В реальном приложении можно сделать запрос к серверу или взять из состояния

  return (
    <div>
      <h2>Карточка с id: {id}</h2>
      <Card card={cardData} />
    </div>
  );
};

export default CardPage;
