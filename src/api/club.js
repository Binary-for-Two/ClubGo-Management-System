import api from "./base";

const clubAPI = {
  getClubProfileByAccount: async (account) => {
    const res = await api.get(
      "/clubs/GetClubProfileByAccount?account=" + account,
    );
    return res.data;
  },

  login: async (formData) => {
    const res = await api.post("/clubs/login", formData);
    if (res.data === "400") {
      return null;
    }
    localStorage.setItem("token", res.data);
    return res.data;
  },

  register: async (formData) => {
    const res = await api.post("/clubs/register", formData);
    return res.data;
  },
};

export default clubAPI;
