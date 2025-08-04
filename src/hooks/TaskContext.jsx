import { createContext } from "react";

const TaskContext = createContext({
  tasks: [],
  isLoading: false,
  error: null,
  fetchTasks: () => {},
  createTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export default TaskContext;
