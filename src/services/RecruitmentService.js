

import { HOST } from "../../utils.js";
export default {
  postJob(credentials) {
    return fetch(HOST + "/jobposting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
  postApplicant(credentials) {
    return fetch(HOST + "/applicants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
  },
  getApplicants() {
    return fetch(HOST + "/applicants").then((res) => res.json());
  },

  getAllJobs() {
    return fetch(HOST + "/jobposting").then((res) => res.json());
    // .then(data => data);
  },
  deleteJob(body) {
    return fetch(HOST + "/jobposting", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: body }),
    }).then((res) => res.JSON());
  },
  getJobById(jobid) {
    return fetch(`${HOST}/jobposting/${jobid}`).then((res) => res.json());
  },
};
