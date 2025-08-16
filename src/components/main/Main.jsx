import Column from "../column/Column";
import useTask from "../../hooks/useTask"; 
import {
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  ColumnWrapper,
  LoadingContainer,
  Loader,
} from "./Main.styled";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const { tasks, isLoading, error } = useTask();

  if (isLoading) {
    return (
      <MainWrapper>
        <LoadingContainer>
          <Loader>Загрузка...</Loader>
        </LoadingContainer>
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

  if (!isLoading && tasks.length === 0) {
    return (
      <MainWrapper>
        <p>Новых задач нет</p>
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
