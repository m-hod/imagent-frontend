import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import Input from "./Input";

export default function PasswordInput({ toggle }: { toggle?: boolean }) {
  const [type, setType] = useState("password");

  return (
    <Input
      label="Password"
      name="password"
      type={type}
      autoComplete="password"
      required
      placeholder="Password"
      minLength={8}
      right={
        toggle && (
          <button
            type="button"
            onClick={() => setType(type === "password" ? "text" : "password")}
          >
            {type === "password" ? (
              <EyeIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
            ) : (
              <EyeOffIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
            )}
          </button>
        )
      }
    />
  );
}
