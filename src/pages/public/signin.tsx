import { asyncLogin, authenticateCSRF } from "../../utils/api";

import Card from "../../components/layouts/Card";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign up here
            </Link>
          </p>
        </div>
        <Card>
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              authenticateCSRF().then(() =>
                asyncLogin(
                  //@ts-ignore
                  e.target.email.value,
                  //@ts-ignore
                  e.target.password.value
                ).then((res) => console.log(res))
              );
            }}
          >
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
