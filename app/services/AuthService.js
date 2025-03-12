import request from "./BaseService";

const AuthService = {
  login: async (email, password) => {
    return request("/auth/login", "POST", { email, password });
  },

  register: async (name, email, password) => {
    return request("/auth/register", "POST", { name, email, password });
  },

  logout: async () => {
    return request("/auth/logout", "POST");
  },
};

export default AuthService;
