import { AxiosError } from "axios";
import { LaravelError } from "./types";

export function axiosErrorMessage(err: AxiosError<LaravelError>) {
  const errorData = err.response?.data;
  if (errorData) {
    const errors = errorData.errors;
    const errorKeys = Object.keys(errors);
    if (errorKeys.length) {
      return errors[errorKeys[0]][0];
    } else return errorData.message;
  } else return err.message;
}
