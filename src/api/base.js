import Axios from "axios";

const api = Axios.create({
  baseURL: "https://cyympawkab.bja.sealos.run",
});

api.interceptors.request.use((config) => {
  if (/^\/clubs\/.*/.test(config.url) || /^\/.*\/Get.*/.test(config.url)) {
    return config;
  }
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
