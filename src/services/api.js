import axios from "axios";

const BASE_URL = "https://wedev-api.sky.pro/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "",
  },
});

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      } else if (error.response.status >= 500) {
        console.error("Server error:", error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

export const registerUser = async (userData) => {
  return await api.post("/user", userData);
};

export const loginUser = async (credentials) => {
  return await api.post("/user/login", credentials);
};

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
