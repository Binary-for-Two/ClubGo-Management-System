import api from "./base";

const clubAPI = {
  getClubProfile: async (account) => {
    const res = await api.get(
      "/clubs/GetClubProfileByAccount?account=" + account,
    );
    return res.data;
  },

  login: async (formData) => {
    const res = await api.post("/clubs/login", formData);
    localStorage.setItem("token", res.data);
    return res.data;
  },

  register: async (formData) => {
    const res = await api.post("/clubs/register", formData);
    return res.data;
  },
};

export default clubAPI;
