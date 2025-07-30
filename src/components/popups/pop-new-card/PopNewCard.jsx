import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../services/api"; // Импорт метода API
import Calendar from "../../calendar/Calendar";

const PopNewCard = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design"); // Категория по умолчанию
  const [date, setDate] = useState(new Date().toISOString()); // Дата по умолчанию
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        title: title || "Новая задача", // Значение по умолчанию, если пустое
        description: description || "",
        topic,
        status: "Без статуса", // Статус по умолчанию
        date,
      };
      await createTask(taskData); // Создание задачи через API
      navigate("/"); // Перенаправление на главную страницу
    } catch (err) {
      setError("Ошибка создания задачи.");
      console.error("Error creating task:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              href="#"
              className="pop-new-card__close"
              onClick={handleCloseClick}
            >
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleCreate} // Добавлен обработчик отправки формы
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar onDateChange={setDate} />{" "}
              {/* Предполагается, что Calendar передаёт дату */}
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${
                    topic === "Web Design" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Web Design")}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${
                    topic === "Research" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Research")}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${
                    topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Copywriting")}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleCreate}
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
