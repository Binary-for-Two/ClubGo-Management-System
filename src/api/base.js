import Axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
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
  } else {
    router.push("/login");
    return config;
  }
  return config;
});

export default api;
