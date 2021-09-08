import Button from "../../components/Button";
import Card from "../../components/layouts/Card";
import { Formik } from "formik";
import Input from "../../components/Input";
import { LockClosedIcon } from "@heroicons/react/solid";
import PasswordInput from "../../components/PasswordInput";
import { asyncSignup } from "../../utils/api";

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
            Sign up for an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create an account and experience the revolution of tag-based image
            sharing.
          </p>
        </div>
        <Card>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              asyncSignup(values.email, values.password)
                .then((res) => console.log(res))
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="rounded-md shadow-sm">
                  <div className="mb-4">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-4">
                    <PasswordInput
                      toggle
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    label="Create account"
                    left={
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    }
                  />
                </div>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
}
