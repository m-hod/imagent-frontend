import { HTMLProps } from "react";

export default function Input({
  label,
  ...props
}: { label: string } & HTMLProps<HTMLInputElement>) {
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
          className={`relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-md ${props.className}`}
        />
      </div>
    </div>
  );
}
