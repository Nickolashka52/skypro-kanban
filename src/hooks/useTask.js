import { useContext } from "react";
import TaskContext from "./TaskContext";

// Удобный хук для использования TaskContext
const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export default useTask;