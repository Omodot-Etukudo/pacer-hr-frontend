import { HOST } from "../../utils.js";
export default {
  getLeaveRequest() {
    return fetch(HOST + "/leaverequest").then((res) => res.json());
  },
  getApprovedLeave() {
    return fetch(HOST + "/approvedleave").then((res) => res.json());
  },
  approveLeave(credentials) {
    return fetch(HOST + "/approvedleave", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
  deleteRequest(body) {
    return fetch(HOST + "/leaverequest", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeid: body }),
    }).then((res) => res.json());
  },
};
