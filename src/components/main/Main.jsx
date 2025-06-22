import Column from "../column/Column";

const cardsWithoutStatus = [
  {
    id: 1,
    theme: "Web Design",
    themeClass: "_orange",
    link: "",
    title: "Название задачи 1",
    date: "30.10.23",
  },
  {
    id: 2,
    theme: "Research",
    themeClass: "_green",
    link: "",
    title: "Название задачи 2",
    date: "30.10.23",
  },
  {
    id: 3,
    theme: "Web Design",
    themeClass: "_orange",
    link: "",
    title: "Название задачи 3",
    date: "30.10.23",
  },
  {
    id: 4,
    theme: "Copywriting",
    themeClass: "_purple",
    link: "",
    title: "Название задачи 4",
    date: "30.10.23",
  },
  {
    id: 5,
    theme: "Web Design",
    themeClass: "_orange",
    link: "",
    title: "Название задачи 5",
    date: "30.10.23",
  },
];

const cardsToDo = [
  {
    id: 6,
    theme: "Research",
    themeClass: "_green",
    link: "",
    title: "Название задачи 6",
    date: "30.10.23",
  },
];

const cardsInProgress = [
  {
    id: 7,
    theme: "Research",
    themeClass: "_green",
    link: "",
    title: "Название задачи 7",
    date: "30.10.23",
  },
  {
    id: 8,
    theme: "Copywriting",
    themeClass: "_purple",
    link: "",
    title: "Название задачи 8",
    date: "30.10.23",
  },
  {
    id: 9,
    theme: "Web Design",
    themeClass: "_orange",
    link: "",
    title: "Название задачи 9",
    date: "30.10.23",
  },
];

const cardsTesting = [
  {
    id: 10,
    theme: "Research",
    themeClass: "_green",
    link: "",
    title: "Название задачи 10",
    date: "30.10.23",
  },
];

const cardsDone = [
  {
    id: 11,
    theme: "Research",
    themeClass: "_green",
    link: "",
    title: "Название задачи 11",
    date: "30.10.23",
  },
];

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса" cards={cardsWithoutStatus} />
            <Column title="Нужно сделать" cards={cardsToDo} />
            <Column title="В работе" cards={cardsInProgress} />
            <Column title="Тестирование" cards={cardsTesting} />
            <Column title="Готово" cards={cardsDone} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
