import { useState, useEffect, useCallback, useMemo } from "react";
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
    if (!isAuth) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await apiGetTasks();
      setTasks(response.data?.tasks || response.tasks || []);
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка загрузки задач");
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  }, [isAuth]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const createTask = useCallback(
    async (taskData) => {
      if (!isAuth) {
        setError("Требуется авторизация");
        return false;
      }

      setIsLoading(true);
      setError(null);
      try {
        const response = await apiCreateTask(taskData);
        const newTask = response.data?.task || response.task;
        setTasks((prev) => [...prev, newTask]);
        return true;
      } catch (err) {
        setError(err.response?.data?.message || "Ошибка создания задачи");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [isAuth]
  );

  const updateTask = useCallback(
    async (
      id,
      taskData,
      {
        temporary = false,
        optimisticUpdate = true,
        rollbackOnError = true,
      } = {}
    ) => {
      if (!isAuth) {
        setError("Требуется авторизация");
        return false;
      }

      let previousTask = null;
      if (optimisticUpdate) {
        previousTask = tasks.find((t) => t._id === id);
        setTasks((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, ...taskData } : task
          )
        );
      }

      if (temporary) return true;

      setIsLoading(true);
      try {
        const response = await apiUpdateTask(id, taskData);
        const updatedTask = response.data?.task || response.task;
        if (updatedTask) {
          setTasks((prev) =>
            prev.map((task) => (task._id === id ? updatedTask : task))
          );
        }
        return true;
      } catch (err) {
        setError(err.response?.data?.message || "Ошибка обновления задачи");
        if (optimisticUpdate && rollbackOnError && previousTask) {
          setTasks((prev) =>
            prev.map((task) => (task._id === id ? previousTask : task))
          );
        }
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [isAuth, tasks]
  );

  const deleteTask = useCallback(
    async (id) => {
      if (!isAuth) {
        setError("Требуется авторизация");
        return false;
      }

      setIsLoading(true);
      setError(null);
      try {
        await apiDeleteTask(id);
        setTasks((prev) => prev.filter((task) => task._id !== id));
        return true;
      } catch (err) {
        setError(err.response?.data?.message || "Ошибка удаления задачи");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [isAuth]
  );

  const contextValue = useMemo(
    () => ({
      tasks,
      isLoading,
      error,
      fetchTasks,
      createTask,
      updateTask,
      deleteTask,
    }),
    [tasks, isLoading, error, fetchTasks, createTask, updateTask, deleteTask]
  );

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};
