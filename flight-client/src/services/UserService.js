import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/user';

export const listAllUser = () => axios.get(REST_API_BASE_URL+"/all");

export const listUserById = () => axios.get(REST_API_BASE_URL+":id");

export const createUser = (user) => axios.post(REST_API_BASE_URL+"/login",user);