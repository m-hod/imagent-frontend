import Footer from "../Footer";
import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import ThumbnailList from "../ThumbnailList";
import { dummyData } from "../../utils/data";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen py-4 pl-4 pr-1 overflow-y-hidden">
      <div className="h-full relative pb-14">
        <div className="h-full overflow-y-auto">
          <PerfectScrollbar>
            <div className="pr-3">
              <ThumbnailList images={dummyData} />
            </div>
          </PerfectScrollbar>
        </div>
        <div className="absolute bottom-0 w-full pr-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
