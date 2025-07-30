import { useEffect, useState } from "react";
import { getTaskById, deleteTask, updateTask } from "../../../services/api"; // Импорт методов API
import { useNavigate } from "react-router-dom";
import Calendar from "../../calendar/Calendar";

const PopBrowse = ({ id, onClose }) => {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setIsLoading(true);
        const response = await getTaskById(id); // Получение задачи по ID
        setTask(response.data.task);
      } catch (err) {
        setError("Ошибка загрузки задачи.");
        console.error("Error fetching task:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteTask(id); // Удаление задачи через API
      navigate("/"); // Перенаправление на главную страницу
    } catch (err) {
      setError("Ошибка удаления задачи.");
      console.error("Error deleting task:", err);
    }
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
                    value={task.description} // Отображение описания из API
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
                  onClick={() => alert("Редактировать задачу")} // Можно добавить логику редактирования
                >
                  Редактировать задачу
                </button>
                <button
                  type="button"
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete} // Добавлена функция удаления
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
