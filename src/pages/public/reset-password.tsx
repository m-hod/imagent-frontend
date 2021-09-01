import Button from "../../components/Button";
import Card from "../../components/layouts/Card";
import { LockClosedIcon } from "@heroicons/react/solid";
import PasswordInput from "../../components/PasswordInput";

export default function ResetPassword() {
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
            Change password for ...
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter a new password for your account
          </p>
        </div>
        <Card>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <PasswordInput toggle />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                label="Change password"
                left={
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                }
              />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
