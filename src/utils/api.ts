import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

export async function authenticateCSRF() {
  await api.get("/sanctum/csrf-cookie");
}

export async function asyncSignin(email: string, password: string) {
  await authenticateCSRF();
  await api.post("/login", {
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
