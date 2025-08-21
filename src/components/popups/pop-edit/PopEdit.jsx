import { useState, useEffect, useRef, useCallback } from "react";
import useTask from "../../../hooks/useTask";
import Calendar from "../../calendar/Calendar";
import * as S from "../pop-browse/PopBrowse.styled";

const PopEdit = ({ id, onClose, onCloseEntirePopup }) => {
  const { tasks, updateTask, deleteTask } = useTask();
  const [modifiedTask, setModifiedTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const originalTaskRef = useRef(null);

  const initializeTask = useCallback(() => {
    const foundTask = tasks.find((t) => t._id === id);
    if (foundTask) {
      if (!originalTaskRef.current) {
        originalTaskRef.current = JSON.parse(JSON.stringify(foundTask));
      }
      setModifiedTask(JSON.parse(JSON.stringify(foundTask)));
      setIsLoading(false);
    } else {
      setError("Задача не найдена");
      setIsLoading(false);
    }
  }, [id, tasks]);

  useEffect(() => {
    initializeTask();
  }, [initializeTask]);

  const handleStatusChange = (newStatus) => {
    const updatedTask = { ...modifiedTask, status: newStatus };
    setModifiedTask(updatedTask);
    updateTask(
      id,
      { status: newStatus },
      {
        temporary: true,
        optimisticUpdate: true,
      }
    );
  };

  const handleChange = (field, value) => {
    setModifiedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!modifiedTask?.title?.trim()) {
      setError("Название задачи не может быть пустым");
      return;
    }
    if (!modifiedTask?.description?.trim()) {
      setError("Описание задачи не может быть пустым");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await updateTask(id, {
        title: modifiedTask.title,
        description: modifiedTask.description,
        topic: modifiedTask.topic,
        status: modifiedTask.status,
        date: modifiedTask.date,
      });
      onClose();
    } catch (err) {
      setError("Ошибка сохранения задачи");
      console.error("Ошибка сохранения задачи:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!originalTaskRef.current) return;
    setModifiedTask(JSON.parse(JSON.stringify(originalTaskRef.current)));
    await updateTask(
      id,
      { status: originalTaskRef.current.status },
      {
        optimisticUpdate: true,
        temporary: false,
      }
    );
    onClose();
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onCloseEntirePopup();
    } catch (err) {
      setError("Ошибка удаления задачи");
      console.error("Ошибка удаления задачи:", err);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (!modifiedTask) return null;

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>
                <S.Input
                  type="text"
                  value={modifiedTask.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="Введите название задачи"
                />
              </S.PopBrowseTitle>
              <S.CategoriesTheme
                $active
                $color={
                  modifiedTask.topic === "Web Design"
                    ? "#ff6d00"
                    : modifiedTask.topic === "Research"
                    ? "#06b16e"
                    : "#9a48f1"
                }
                $bg={
                  modifiedTask.topic === "Web Design"
                    ? "#ffe4c2"
                    : modifiedTask.topic === "Research"
                    ? "#b4fdd1"
                    : "#e9d4ff"
                }
              >
                {modifiedTask.topic}
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.StatusBlock>
              <S.Subtitle>Статус</S.Subtitle>
              <div style={{ width: "100%", overflow: "hidden" }}>
                <S.StatusList>
                  {[
                    "Без статуса",
                    "Нужно сделать",
                    "В работе",
                    "Тестирование",
                    "Готово",
                  ].map((item) => (
                    <S.StatusItemEdit
                      key={item}
                      $active={modifiedTask.status === item}
                      onClick={() => handleStatusChange(item)}
                    >
                      {item}
                    </S.StatusItemEdit>
                  ))}
                </S.StatusList>
              </div>
            </S.StatusBlock>
            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormGroup>
                  <S.Subtitle>Описание задачи</S.Subtitle>
                  <S.Textarea
                    value={modifiedTask.description || ""}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Введите описание задачи"
                  />
                </S.FormGroup>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={modifiedTask.date}
                onDateChange={(date) => handleChange("date", date)}
              />
            </S.PopBrowseWrap>
            {error && (
              <div
                style={{
                  color: "red",
                  padding: "10px",
                  margin: "10px 0",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {error}
              </div>
            )}
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnSave onClick={handleSave}>Сохранить</S.BtnSave>
                <S.BtnCancel onClick={handleCancel}>Отменить</S.BtnCancel>
                <S.BtnDelete onClick={handleDelete}>Удалить задачу</S.BtnDelete>
              </S.BtnGroup>
              <S.BtnClose onClick={onClose}>Закрыть</S.BtnClose>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};

export default PopEdit;
