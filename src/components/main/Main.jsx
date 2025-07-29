import { useEffect, useState } from "react";
import Column from "../column/Column";
import { getTasks } from "../../services/api";

import {
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  ColumnWrapper,
} from "./Main.styled";

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
  const [error, setError] = useState(null); // Добавлено для обработки ошибок

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await getTasks(); // Загрузка задач с сервера
        setCards(response.data.tasks); // Установка задач из ответа API
        setIsLoading(false);
      } catch (err) {
        setError("Ошибка загрузки задач. Попробуйте позже.");
        setIsLoading(false);
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) {
    return (
      <MainWrapper
        style={{
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "#555" }}>Данные загружаются</p>
      </MainWrapper>
    );
  }

  if (error) {
    return (
      <MainWrapper
        style={{
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "red" }}>{error}</p>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => {
              const cardsByStatus = cards.filter(
                (card) => card.status === status
              );
              return (
                <ColumnWrapper key={status}>
                  <Column title={status} cardsList={cardsByStatus} />
                </ColumnWrapper>
              );
            })}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
