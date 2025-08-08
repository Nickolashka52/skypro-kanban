import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTask from "../../../hooks/useTask";
import Calendar from "../../calendar/Calendar";
import * as S from "./PopBrowse.styled";

const PopBrowse = ({ id, onClose }) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Получаем задачи и функцию удаления из контекста
  const { tasks, deleteTask: contextDeleteTask } = useTask();

  // Находим задачу по id из общего списка задач из контекста
  useEffect(() => {
    // Ищем задачу в массиве tasks, который приходит из TaskProvider
    const foundTask = tasks.find((t) => t._id === id);
    if (foundTask) {
      setTask(foundTask);
      setIsLoading(false);
    } else if (tasks.length > 0) {
      // Проверяем, что список задач загружен
      // Если задача не найдена и список задач уже загружен
      setError("Задача не найдена.");
      setIsLoading(false);
    }
    // Добавим tasks.length в зависимости, чтобы эффект сработал,
    // когда список задач будет загружен в первый раз
  }, [id, tasks, tasks.length]);

  // Функция удаления использует контекст
  const handleDelete = async () => {
    try {
      // Вызываем deleteTask из контекста
      const success = await contextDeleteTask(id);
      if (success) {
        // Успешно: контекст обновлен, navigate на главную
        navigate("/");
      } else {
        // Ошибка удаления (например, 401, обрабатывается в TaskProvider)
        // Можно установить локальную ошибку или показать уведомление
        setError("Не удалось удалить задачу. Попробуйте снова.");
      }
    } catch (err) {
      // Этот блок может не сработать, если ошибка обработана в TaskProvider
      setError("Ошибка удаления задачи.");
      console.error("Error deleting task:", err);
    }
  };

  // Показываем состояние загрузки, пока список задач из контекста не загрузится
  // или пока не будет найдена конкретная задача
  if (isLoading || (tasks.length === 0 && !error)) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (!task) {
    return <div>Задача не найдена</div>;
  }

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>
                {task.title} #{task._id}
              </S.PopBrowseTitle>
              <S.CategoriesTheme className="_orange _active-category">
                <p className="_orange">{task.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>

            <S.StatusWrapper>
              <S.StatusParagraph className="subttl">Статус</S.StatusParagraph>
              <S.StatusThemes>
                <S.StatusTheme
                  className={task.status === "Без статуса" ? "_gray" : "_hide"}
                >
                  <p>Без статуса</p>
                </S.StatusTheme>
                <S.StatusTheme
                  className={
                    task.status === "Нужно сделать" ? "_gray" : "_hide"
                  }
                >
                  <p>Нужно сделать</p>
                </S.StatusTheme>
                <S.StatusTheme
                  className={task.status === "В работе" ? "_gray" : "_hide"}
                >
                  <p>В работе</p>
                </S.StatusTheme>
                <S.StatusTheme
                  className={task.status === "Тестирование" ? "_gray" : "_hide"}
                >
                  <p>Тестирование</p>
                </S.StatusTheme>
                <S.StatusTheme
                  className={task.status === "Готово" ? "_gray" : "_hide"}
                >
                  <p>Готово</p>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.StatusWrapper>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    value={task.description}
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar />
            </S.PopBrowseWrap>

            <S.CategoriesWrapper className="theme-down">
              <S.CategoriesParagraph className="subttl">
                Категория
              </S.CategoriesParagraph>
              <S.CategoriesTheme className="_orange _active-category">
                <p className="_orange">{task.topic}</p>
              </S.CategoriesTheme>
            </S.CategoriesWrapper>

            <S.PopBrowseBtnGroup>
              <div className="btn-group">
                <S.ButtonBorder
                  className="_hover03"
                  onClick={() => alert("Редактировать задачу")}
                >
                  Редактировать задачу
                </S.ButtonBorder>
                <S.ButtonBorder className="_hover03" onClick={handleDelete}>
                  Удалить задачу
                </S.ButtonBorder>
              </div>
              <S.ButtonBackground className="_hover01" onClick={onClose}>
                Закрыть
              </S.ButtonBackground>
            </S.PopBrowseBtnGroup>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
      <S.MobileStyles />
    </S.PopBrowseWrapper>
  );
};

export default PopBrowse;
