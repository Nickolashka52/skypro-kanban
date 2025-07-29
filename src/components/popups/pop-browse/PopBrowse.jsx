import Calendar from "../../calendar/Calendar";

const PopBrowse = ({ id, onClose }) => {
  return (
    <div className="pop-browse" id="">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи #{id}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
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
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
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
                  onClick={() => alert("Удалить задачу")}
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
            {/* Можно добавить блок редактирования, если нужно */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
