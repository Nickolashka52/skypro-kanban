import Column from "../column/Column";
import useTask from "../../hooks/useTask"; // Импортируем хук
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
  // Получаем состояние и функции из TaskContext
  const { tasks, isLoading, error } = useTask();

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
              const cardsByStatus = tasks.filter(
                (card) => card && card.status === status
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
