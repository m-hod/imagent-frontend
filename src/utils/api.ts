import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

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
  await api.post("/register", {
    email,
    password,
  });
}
