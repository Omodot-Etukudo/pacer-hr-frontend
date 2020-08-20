import { HOST } from "../../utils.js";
export default {
  register(credentials) {
    return fetch(HOST + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
  login(credentials) {
    return fetch(HOST + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
};
