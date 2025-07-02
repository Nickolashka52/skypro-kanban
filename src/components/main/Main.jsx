import { useEffect, useState } from "react";
import cardsList from "../../data";
import Column from "../column/Column";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsList);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main
        className="main"
        style={{
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "#555" }}>Данные загружаются</p>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((status) => {
              const cardsByStatus = cards.filter(
                (card) => card.status === status
              );
              return (
                <Column key={status} title={status} cardsList={cardsByStatus} />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
