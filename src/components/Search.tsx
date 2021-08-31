import Input from "./Input";
import React from "react";

export default function Search() {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search by tag"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}
