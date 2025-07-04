import { useEffect, useState } from "react";
import cardsList from "../../data";
import Column from "../column/Column";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsList);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
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
