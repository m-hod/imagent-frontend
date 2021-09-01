import Button from "../../components/Button";
import Card from "../../components/layouts/Card";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function ForgotPassword() {
  const [hasSubmit, setHasSubmit] = useState(false);

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
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we will send you a password reset link.
          </p>
        </div>
        <Card>
          {!hasSubmit ? (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setHasSubmit(true);
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
              </div>

              <div>
                <Button
                  type="submit"
                  label="Send password reset email"
                  left={
                    <MailIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center">
                <MailIcon className="h-10 w-10 text-green-500" />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Check your email for a link to reset your password. If it
                doesn’t appear within a few minutes, check your spam folder.
              </p>
              <div>
                <Link to="/">
                  <button
                    type="button"
                    className="w-full bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Return to login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
