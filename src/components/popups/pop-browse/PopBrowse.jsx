import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTask from "../../../hooks/useTask"; // Импортируем хук
import Calendar from "../../calendar/Calendar";

const PopBrowse = ({ id, onClose }) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Получаем функции из контекста
  const { tasks, deleteTask, updateTask } = useTask();

  // Находим задачу по id из общего списка
  useEffect(() => {
    const foundTask = tasks.find((t) => t._id === id);
    if (foundTask) {
      setTask(foundTask);
      setIsLoading(false);
    } else if (!isLoading) {
      // Если задача не найдена и загрузка закончена
      setError("Задача не найдена.");
    }
  }, [id, tasks, isLoading]); // Зависимости: id и tasks

  // Функция удаления использует контекст
  const handleDelete = async () => {
    try {
      const success = await deleteTask(id);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      setError("Ошибка удаления задачи.");
      console.error("Error deleting task:", err);
    }
  };

  // Функция редактирования (пример, можно расширить)
  const handleEdit = () => {
    // Здесь можно установить состояние редактирования или перейти на форму редактирования
    alert("Функция редактирования. ID: " + id);
  };

  if (isLoading) {
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
                  onClick={handleEdit} // Используем новую функцию
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