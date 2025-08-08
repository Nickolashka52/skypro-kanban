import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTask from "../../../hooks/useTask";
import Calendar from "../../calendar/Calendar";
import {
  PopNewCardStyled,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  Subtitle,
  Categories,
  CategoriesThemes,
  CategoriesTheme,
  ErrorMessage,
} from "./PopNewCard.styled";

const PopNewCard = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [date, setDate] = useState(new Date().toISOString());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { createTask } = useTask();

  const handleCloseClick = (e) => {
    e.preventDefault();
    if (onClose) onClose();
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const taskData = {
        title: title || "Новая задача",
        description: description || "",
        topic,
        status: "Без статуса",
        date,
      };
      const success = await createTask(taskData);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      setError("Ошибка создания задачи.");
      console.error("Error creating task:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PopNewCardStyled id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose href="#" onClick={handleCloseClick}>
              &#10006;
            </PopNewCardClose>

            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" onSubmit={handleCreate}>
                <FormNewBlock>
                  <label htmlFor="formTitle">
                    <Subtitle>Название задачи</Subtitle>
                  </label>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />
                </FormNewBlock>

                <FormNewBlock>
                  <label htmlFor="textArea">
                    <Subtitle>Описание задачи</Subtitle>
                  </label>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormNewBlock>
              </PopNewCardForm>

              <Calendar onDateChange={setDate} />
            </PopNewCardWrap>

            <Categories>
              <Subtitle>Категория</Subtitle>
              <CategoriesThemes>
                <CategoriesTheme
                  $active={topic === "Web Design"}
                  onClick={() => setTopic("Web Design")}
                  style={{ background: "#ffe4c2", color: "#ff6d00" }}
                >
                  <p style={{ color: "#ff6d00" }}>Web Design</p>
                </CategoriesTheme>

                <CategoriesTheme
                  $active={topic === "Research"}
                  onClick={() => setTopic("Research")}
                  style={{ background: "#b4fdd1", color: "#06b16e" }}
                >
                  <p style={{ color: "#06b16e" }}>Research</p>
                </CategoriesTheme>

                <CategoriesTheme
                  $active={topic === "Copywriting"}
                  onClick={() => setTopic("Copywriting")}
                  style={{ background: "#e9d4ff", color: "#9a48f1" }}
                >
                  <p style={{ color: "#9a48f1" }}>Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </Categories>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <FormNewCreate onClick={handleCreate} disabled={isLoading}>
              {isLoading ? "Создание..." : "Создать задачу"}
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyled>
  );
};

export default PopNewCard;
