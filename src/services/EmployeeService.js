
import { HOST } from "../../utils.js";
export default {
  getEmployees() {
    return fetch(HOST + "/users").then((res) => res.json());
    // .then(data => data);
  },
  getEmployeeById(employeeid) {
    return fetch(`${HOST}/users/${employeeid}`).then((res) => res.json());
  },
};
