import React from "react";
import Search from "../Search";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen p-4 overflow-y-hidden">
      <div className="h-full relative">
        <div className="absolute bottom-0 w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}
