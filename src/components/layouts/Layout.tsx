import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
