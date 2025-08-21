import { useContext } from "react";
import TaskContext from "./TaskContext";

export const useTasks = () => {
  const { tasks } = useContext(TaskContext);
  return tasks;
};

export const useTaskActions = () => {
  const { createTask, updateTask, deleteTask, fetchTasks } = useContext(TaskContext);
  return { createTask, updateTask, deleteTask, fetchTasks };
};

export const useTaskStatus = () => {
  const { isLoading, error } = useContext(TaskContext);
  return { isLoading, error };
};

const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export default useTask;
