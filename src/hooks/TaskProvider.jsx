import { useState, useEffect, useCallback } from "react";
import {
  getTasks as apiGetTasks,
  createTask as apiCreateTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/api";
import TaskContext from "./TaskContext";
import useAuth from "./useAuth";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuth } = useAuth();

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiGetTasks();
      if (response.data && Array.isArray(response.data.tasks)) {
        setTasks(response.data.tasks);
      } else {
        console.warn(
          "API вернул некорректные данные для задач:",
          response.data
        );
        setTasks([]);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(
          "Запрос задач вернул 401, пользователь будет перенаправлен."
        );
        setTasks([]);
      } else {
        setError("Ошибка загрузки задач. Попробуйте позже.");
        console.error("Error fetching tasks:", err);
        setTasks([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setTasks([]); // Очищаем задачи при выходе
      return;
    }
    fetchTasks();
  }, [isAuth, fetchTasks]);

  // Функция для создания новой задачи
  const createTask = async (taskData) => {
    if (!isAuth) {
      setError("Невозможно создать задачу: пользователь не авторизован.");
      return false;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await apiCreateTask(taskData);
      if (response.status === 201) {
        await fetchTasks();
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
