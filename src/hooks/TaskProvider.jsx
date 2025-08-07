// src/hooks/TaskProvider.jsx
import { useState, useEffect, useCallback } from "react"; // <-- Добавили useCallback в импорт
import {
  getTasks as apiGetTasks,
  createTask as apiCreateTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/api";
import TaskContext from "./TaskContext";
import useAuth from "./useAuth"; // Импортируем хук для получения данных об авторизации

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuth } = useAuth(); // Получаем состояние авторизации

  // Функция для загрузки всех задач с сервера
  // Обернули в useCallback
  const fetchTasks = useCallback(async () => {
    // Добавляем проверку: загружаем задачи только если пользователь авторизован
    if (!isAuth) {
      // console.log("Пользователь не авторизован, загрузка задач пропущена");
      return; // Просто выходим, не пытаясь делать запрос
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await apiGetTasks();
      // Проверяем, что response.data.tasks существует и это массив
      if (response.data && Array.isArray(response.data.tasks)) {
        setTasks(response.data.tasks);
      } else {
        console.warn(
          "API вернул некорректные данные для задач:",
          response.data
        );
        setTasks([]); // Устанавливаем пустой массив, если данные некорректны
      }
    } catch (err) {
      // Уточняем обработку ошибки 401
      if (err.response && err.response.status === 401) {
        // Ошибка 401 обрабатывается axios-интерцептором,
        // поэтому здесь можно просто залогировать и выйти
        console.log(
          "Запрос задач вернул 401, пользователь будет перенаправлен."
        );
        // Намеренно не устанавливаем setError, чтобы не мешать редиректу
        setTasks([]); // Очищаем список задач
      } else {
        setError("Ошибка загрузки задач. Попробуйте позже.");
        console.error("Error fetching tasks:", err);
        setTasks([]); // На всякий случай очищаем, если ошибка
      }
    } finally {
      setIsLoading(false);
    }
  }, [isAuth]); // <-- useCallback зависит от isAuth

  // Функция для создания новой задачи
  const createTask = async (taskData) => {
    // Проверка авторизации перед созданием задачи
    if (!isAuth) {
      setError("Невозможно создать задачу: пользователь не авторизован.");
      return false;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await apiCreateTask(taskData);

      if (response.status === 201) {
        await fetchTasks(); // Перезагружаем список задач
        return true;
      } else {
        console.warn(
          "API createTask вернул неожиданный статус:",
          response.status,
          response.data
        );
        setError("Сервер вернул неожиданный ответ при создании задачи.");
        return false;
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log("Создание задачи вернуло 401.");
        // Ошибка 401 обрабатывается axios-интерцептором
        return false;
      } else {
        setError("Ошибка создания задачи.");
        console.error("Error creating task:", err);
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для обновления задачи
  const updateTask = async (id, taskData) => {
    // Проверка авторизации перед обновлением задачи
    if (!isAuth) {
      setError("Невозможно обновить задачу: пользователь не авторизован.");
      return false;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await apiUpdateTask(id, taskData);

      if (
        response.data &&
        typeof response.data === "object" &&
        response.data._id
      ) {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === id ? response.data : task))
        );
        return true;
      } else {
        console.warn(
          "API updateTask вернул неожиданную структуру данных:",
          response.data
        );
        setError("Сервер вернул некорректный ответ при обновлении задачи.");
        return false;
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log("Обновление задачи вернуло 401.");
        // Ошибка 401 обрабатывается axios-интерцептором
        return false;
      } else {
        setError("Ошибка обновления задачи.");
        console.error("Error updating task:", err);
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для удаления задачи
  const deleteTask = async (id) => {
    // Проверка авторизации перед удалением задачи
    if (!isAuth) {
      setError("Невозможно удалить задачу: пользователь не авторизован.");
      return false;
    }

    setIsLoading(true);
    setError(null);
    try {
      await apiDeleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      return true;
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log("Удаление задачи вернуло 401.");
        // Ошибка 401 обрабатывается axios-интерцептором
        return false;
      } else {
        setError("Ошибка удаления задачи.");
        console.error("Error deleting task:", err);
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Загружаем задачи при монтировании провайдера ИЛИ при изменении состояния авторизации
  // Теперь useEffect зависит от fetchTasks, созданного useCallback
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); // <-- Добавили fetchTasks сюда

  const value = {
    tasks,
    isLoading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
