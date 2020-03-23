import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import AdminLayout from '../layouts/AdminLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import EmployeeLayout from '../layouts/EmployeeLayout.vue'
import UserLayout from '../layouts/UserLayout.vue'

import EmployeeHome from '../views/Employee/Home.vue'

import UserHome from '../views/User/Home.vue'

import AdminHome from '../views/Admin/Home.vue'

import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'

import CreateUser from '../views/Employee/CreateUser.vue'
import PayIn from '../views/Employee/PayIn.vue'
import remittance from '../views/User/remittance.vue'
import History from '../views/Employee/History.vue'
import TheContainer from '../layouts/TheContainer.vue'



import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)


Vue.use(VueRouter)

axios.defaults.baseURL = "http://localhost:5000/api/";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: LoginLayout }
  },
  {
    path: '/employee/',
    name: 'EmployeeHome',
    component: EmployeeHome,
    meta: { layout: EmployeeLayout }
  },
  {
    path: '/user/',
    name: 'UserHome',
    component: UserHome,
    meta: { layout: UserLayout }
  },
  {
    path: '/admin/',
    name: 'AdminHome',
    component: AdminHome,
    meta: { layout: AdminLayout }
  },
  {
    path: '/employee/create-user',
    name: 'CreateUser',
    component: CreateUser,
    meta: { layout: EmployeeLayout }
  },
  {
    path: '/employee/pay-in',
    name: 'PayIn',
    component: PayIn,
    meta: { layout: EmployeeLayout }
  },
  {
    path: '/user/remittance',
    name: 'remittance',
    component: remittance,
    meta: { layout: UserLayout }
  },
  {
    path: '/employee/histories',
    name: 'History',
    component: History,
    meta: { layout: EmployeeLayout }
  },
  {
    path: '/employee/histories1',
    name: 'History',
    component: TheContainer,
    meta: { layout: TheContainer }
  }
]

const router = new VueRouter({
  routes
})

export default router
