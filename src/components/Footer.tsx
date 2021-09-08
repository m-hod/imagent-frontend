import { ChevronLeftIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect, useState } from "react";

import Input from "./Input";
import { LayoutContext } from "../context/LayoutContext";

export default function Footer() {
  const layoutContext = useContext(LayoutContext)!;
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      layoutContext.setNavIsVisible(false);
    }
  }, [isExpanded, layoutContext]);

  return (
    <div>
      {isExpanded ? (
        <div className="relative">
          {/* <div className="absolute right-0 -top-10 z-50 pr-3">
            <button className="p-0.5 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <PlusIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" />
            </button>
          </div> */}
          <Input
            type="text"
            placeholder="Search by tag"
            left={
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                }}
              >
                <ChevronLeftIcon className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400" />
              </button>
            }
            right={
              <button
                type="button"
                onClick={() => {
                  //
                }}
              >
                <SearchIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" />
              </button>
            }
            className="w-full"
            style={{
              borderRadius: 25,
            }}
          />
        </div>
      ) : (
        <div className="mt-1 flex justify-between items-center px-3 py-2">
          <button
            type="button"
            onClick={() => {
              layoutContext.setNavIsVisible(!layoutContext.navIsVisible);
            }}
          >
            <MenuIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" />
          </button>
          <button
            type="button"
            onClick={() => {
              setIsExpanded(true);
            }}
          >
            <SearchIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" />
          </button>
        </div>
      )}
    </div>
  );
}
