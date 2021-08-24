import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-8">
      {children}
    </div>
  );
}
