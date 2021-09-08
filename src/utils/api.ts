import { axiosErrorMessage, checkXSRF } from "./utils";

import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    console.log(checkXSRF());
    if (!checkXSRF()) {
      console.log("fetching csrf");
      // await authenticateCSRF();
    }
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    toast.error(axiosErrorMessage(err));
    return Promise.reject(err);
  }
);

export async function authenticateCSRF() {
  return await api.get("/sanctum/csrf-cookie");
}

export async function asyncSignin(email: string, password: string) {
  await authenticateCSRF();
  return await api.post("/login", {
    email,
    password,
  });
}

export async function asyncSignup(email: string, password: string) {
  await authenticateCSRF();
  await api.post("/register", {
    email,
    password,
  });
}

export async function verifyEmail(userId: number, queryString: string) {
  return await api.get(`/email/verify/${userId}/${queryString}`);
}
