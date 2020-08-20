import { HOST } from "../../utils.js";
export default {
  addSalary(credentials) {
    return fetch(HOST + "/finance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
  getSalary() {
    return fetch(HOST + "/finance").then((res) => res.json());
    // .then(data => data);
  },
};
