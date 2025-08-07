// src/components/popups/pop-browse/PopBrowse.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTask from "../../../hooks/useTask"; // Импортируем хук для задач
import Calendar from "../../calendar/Calendar";

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
    } else if (tasks.length > 0) { // Проверяем, что список задач загружен
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
    <div className="pop-browse" id="">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {task.title} #{task._id}
              </h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div
                  className={`status__theme ${
                    task.status === "Без статуса" ? "_gray" : "_hide"
                  }`}
                >
                  <p>Без статуса</p>
                </div>
                <div
                  className={`status__theme ${
                    task.status === "Нужно сделать" ? "_gray" : "_hide"
                  }`}
                >
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div
                  className={`status__theme ${
                    task.status === "В работе" ? "_gray" : "_hide"
                  }`}
                >
                  <p>В работе</p>
                </div>
                <div
                  className={`status__theme ${
                    task.status === "Тестирование" ? "_gray" : "_hide"
                  }`}
                >
                  <p>Тестирование</p>
                </div>
                <div
                  className={`status__theme ${
                    task.status === "Готово" ? "_gray" : "_hide"
                  }`}
                >
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    value={task.description}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={() => alert("Редактировать задачу")}
                >
                  Редактировать задачу
                </button>
                <button
                  type="button"
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  Удалить задачу
                </button>
              </div>
              <button
                type="button"
                className="btn-browse__close _btn-bg _hover01"
                onClick={onClose}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
