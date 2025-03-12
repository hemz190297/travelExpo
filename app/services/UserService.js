import request from "./BaseService";

const UserService = {
  getProfile: async () => {
    return request("/users/profile", "GET");
  },

  updateProfile: async (userData) => {
    return request("/users/profile", "PUT", userData);
  },
};

export default UserService;
