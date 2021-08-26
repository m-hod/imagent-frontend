import React, { HTMLProps } from "react";

export default function Input({
  label,
  right,
  ...props
}: { label: string; right?: React.ReactNode } & HTMLProps<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          {...props}
          className={`relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-md ${
            props.className
          } ${right && "pr-14"}`}
        />
        {right && (
          <div className="absolute w-12 right-0 top-0 h-full flex items-center justify-center px-3 z-20">
            {right}
          </div>
        )}
      </div>
    </div>
  );
}
