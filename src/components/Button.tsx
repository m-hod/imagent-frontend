import React, { HTMLProps } from "react";

import LoadingIndicator from "./LoadingIndicator";

export default function Button({
  label,
  type = "button",
  loading,
  variant = "solid",
  left,
  ...props
}: {
  label: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  variant?: "solid" | "outlined";
  left?: React.ReactNode;
} & HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={type}
      disabled={loading}
      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
        ${variant === "solid" && "text-white bg-indigo-600 hover:bg-indigo-700"}
        ${variant === "outlined" && "text-gray-700 hover:bg-gray-50"}
       `}
    >
      {loading ? <LoadingIndicator /> : label}
      {left && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {left}
        </span>
      )}
    </button>
  );
}
