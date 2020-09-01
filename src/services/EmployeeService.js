import { HOST } from "../../utils.js";
export default {
  getEmployees() {
    return fetch(HOST + "/users").then((res) => res.json());
    // .then(data => data);
  },
  getPerformance() {
    return fetch(HOST + "/performance").then((res) => res.json());
    // .then(data => data);
  },
  getEmployeeById(employeeid) {
    return fetch(`${HOST}/users/${employeeid}`).then((res) => res.json());
  },
  updateEmployee(credentials, employeeid) {
    return fetch(`${HOST}/users/${employeeid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
};
