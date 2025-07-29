import Card from "../card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled";

const Column = ({ title, cardsList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardsList.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
