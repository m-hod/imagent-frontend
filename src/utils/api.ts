import axios from "axios";

export async function asyncLogin(email: string, password: string) {
  await axios.post("/login", {
    email,
    password,
  });
}
