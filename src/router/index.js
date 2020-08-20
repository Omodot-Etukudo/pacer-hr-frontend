import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import Careers from "@/components/Careers";
import Jobopening from "@/components/Jobopening";
import Dashboard from "@/components/Dashboard";
import Employees from "@/components/Employees";
import Payroll from "@/components/Payroll";
import Createsalary from "@/components/Createsalary";
import Recruitment from "@/components/Recruitment";
import Postedjobs from "@/components/Postedjobs";
import Leave from "@/components/Leave";
import SingleEmployee from "@/components/SingleEmployee";
import Register from "@/components/Register";
import Createjob from "@/components/Createjob";
import Performance from "@/components/Performance";
import missing from "@/components/missing";
import Survey from "@/components/Survey";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    //AUTHENTICATION
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    //RECRUITMENT 1
    {
      path: "/careers",
      name: "Careers",
      component: Careers,
    },
    {
      path: "/careers/:jobid",
      name: "Careersid",
      component: Jobopening,
    },
    //DASHBOARD
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    //EMPLOYEE DIRECTORY
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/performance",
      name: "performance",
      component: Performance,
    },
    {
      path: "/performance/:employeeid",
      name: "performancesurvey",
      component: Survey,
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employees,
    },
    {
      path: "/employees/:id",
      name: "singleEmployee",
      component: SingleEmployee,
    },
    //PAYROLL MANAGEMENT
    {
      path: "/payroll",
      name: "Payroll",
      component: Payroll,
    },
    {
      path: "/createsalary",
      name: "Createsalary",
      component: Createsalary,
    },
    //RECRUITMENT MANAGEMENT
    {
      path: "/recruitment",
      name: "Recruitment",
      component: Recruitment,
    },
    {
      path: "/postedjobs",
      name: "Postedjobs",
      component: Postedjobs,
    },
    {
      path: "/createjob",
      name: "Createjob",
      component: Createjob,
    },
    //LEAVE REQUEST MANAGEMENT
    {
      path: "/leave",
      name: "Leave",
      component: Leave,
    },
    //ERROR 404 PAGE
    {
      path: "*",
      component: missing,
    },
  ],
});
