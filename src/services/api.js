import axios from "axios";

// Базовый URL API
const BASE_URL = "https://wedev-api.sky.pro/api";

// Создаём экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "",
  },
});

// Интерцептор для добавления токена в заголовки запросов
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерцептор для обработки ошибок (например, 401 - unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Если токен недействителен, удаляем его и перенаправляем на логин
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Методы для работы с пользователями
export const registerUser = async (userData) => {
  return await api.post("/user", userData);
};

export const loginUser = async (credentials) => {
  return await api.post("/user/login", credentials);
};

// Методы для работы с задачами
export const getTasks = async () => {
  return await api.get("/kanban");
};

export const getTaskById = async (id) => {
  return await api.get(`/kanban/${id}`);
};

export const createTask = async (taskData) => {
  return await api.post("/kanban", taskData);
};

export const updateTask = async (id, taskData) => {
  return await api.put(`/kanban/${id}`, taskData);
};

export const deleteTask = async (id) => {
  return await api.delete(`/kanban/${id}`);
};

export default api;
