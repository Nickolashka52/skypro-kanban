import { useState, useEffect } from "react";
import useTask from "../../../hooks/useTask";
import Calendar from "../../calendar/Calendar";
import PopEdit from "../pop-edit/PopEdit";
import * as S from "./PopBrowse.styled";

const PopBrowse = ({ id, onClose }) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { tasks, deleteTask } = useTask();

  useEffect(() => {
    const foundTask = tasks.find((t) => t._id === id);
    if (foundTask) {
      setTask(foundTask);
      setIsLoading(false);
    } else if (tasks.length > 0) {
      setError("Задача не найдена");
      setIsLoading(false);
    }
  }, [id, tasks]);

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onClose();
    } catch (err) {
      setError("Ошибка удаления задачи");
      console.error("Ошибка удаления задачи:", err); // Используем переменную err
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!task) return <div>Задача не найдена</div>;

  return (
    <>
      {isEditing ? (
        <PopEdit
          id={id}
          onClose={handleEditClose}
          onCloseEntirePopup={onClose}
        />
      ) : (
        <S.PopBrowseWrapper>
          <S.PopBrowseContainer>
            <S.PopBrowseBlock>
              <S.PopBrowseContent>
                <S.PopBrowseTopBlock>
                  <S.PopBrowseTitle>{task.title}</S.PopBrowseTitle>

                  <S.CategoriesTheme
                    $active
                    $color={
                      task.topic === "Web Design"
                        ? "#ff6d00"
                        : task.topic === "Research"
                        ? "#06b16e"
                        : "#9a48f1"
                    }
                    $bg={
                      task.topic === "Web Design"
                        ? "#ffe4c2"
                        : task.topic === "Research"
                        ? "#b4fdd1"
                        : "#e9d4ff"
                    }
                  >
                    {task.topic}
                  </S.CategoriesTheme>
                </S.PopBrowseTopBlock>

                <S.StatusBlock>
                  <S.Subtitle>Статус</S.Subtitle>
                  <S.StatusItem $active>{task.status}</S.StatusItem>
                </S.StatusBlock>

                <S.PopBrowseWrap>
                  <S.PopBrowseForm>
                    <S.FormGroup>
                      <S.Subtitle>Описание задачи</S.Subtitle>
                      <S.Textarea readOnly value={task.description || ""} />
                    </S.FormGroup>
                  </S.PopBrowseForm>

                  <Calendar selectedDate={task.date} readOnly />
                </S.PopBrowseWrap>

                <S.PopBrowseBtnBrowse>
                  <S.BtnGroup>
                    <S.BtnEdit onClick={handleEdit}>
                      Редактировать задачу
                    </S.BtnEdit>
                    <S.BtnDelete onClick={handleDelete}>
                      Удалить задачу
                    </S.BtnDelete>
                  </S.BtnGroup>
                  <S.BtnClose onClick={onClose}>Закрыть</S.BtnClose>
                </S.PopBrowseBtnBrowse>
              </S.PopBrowseContent>
            </S.PopBrowseBlock>
          </S.PopBrowseContainer>
        </S.PopBrowseWrapper>
      )}
    </>
  );
};

export default PopBrowse;
