import { useState, useEffect } from "react";
import {
  getTasks as apiGetTasks,
  createTask as apiCreateTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/api";
import TaskContext from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Функция для загрузки всех задач с сервера
  const fetchTasks = async () => {
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
      setError("Ошибка загрузки задач. Попробуйте позже.");
      console.error("Error fetching tasks:", err);
      setTasks([]); // На всякий случай очищаем, если ошибка
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для создания новой задачи
  const createTask = async (taskData) => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Отправляем запрос на создание задачи
      const response = await apiCreateTask(taskData);

      // 2. Проверяем, что запрос прошёл успешно (обычно status 201 Created)
      //    Нам не нужно проверять response.data.task или response.data._id,
      //    потому что API возвращает { tasks: [...] }
      if (response.status === 201) {
        // Или просто if (response.status >= 200 && response.status < 300)
        // 3. После успешного создания задачи,
        //    заново загружаем весь список задач с сервера,
        //    чтобы получить обновлённый массив.
        await fetchTasks();
        return true; // Успешно создано и список обновлён
      } else {
        // Если статус не 201, считаем это ошибкой
        console.warn(
          "API createTask вернул неожиданный статус:",
          response.status,
          response.data
        );
        setError("Сервер вернул неожиданный ответ при создании задачи.");
        return false;
      }
    } catch (err) {
      setError("Ошибка создания задачи.");
      console.error("Error creating task:", err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для обновления задачи
  const updateTask = async (id, taskData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiUpdateTask(id, taskData);
      // Проверяем, что ответ содержит данные задачи
      if (
        response.data &&
        typeof response.data === "object" &&
        response.data._id
      ) {
        // Обновляем задачу в списке
        setTasks(
          (prevTasks) =>
            prevTasks.map((task) => (task._id === id ? response.data : task)) // <-- response.data, а не response.data.task
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
      setError("Ошибка обновления задачи.");
      console.error("Error updating task:", err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для удаления задачи
  const deleteTask = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await apiDeleteTask(id);
      // Удаляем задачу из списка по id
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      return true;
    } catch (err) {
      setError("Ошибка удаления задачи.");
      console.error("Error deleting task:", err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Загружаем задачи при монтировании провайдера
  useEffect(() => {
    fetchTasks();
  }, []);

  // Оборачиваем все данные и функции в value и передаем в Provider
  const value = {
    tasks,
    isLoading,
    error,
    fetchTasks, // Можно вызвать вручную, если нужно обновить
    createTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
