import React, { useContext } from "react";

import Button from "./Button";
import Footer from "./Footer";
import { LayoutContext } from "../context/LayoutContext";

export default function Nav() {
  const layoutContext = useContext(LayoutContext)!;

  return (
    <div className="absolute h-full w-full pr-3">
      {/* <div className="flex flex-col justify-end items-center"> */}
      {/* {layoutContext.navIsVisible && ( */}
      <div className="w-full h-full flex flex-col justify-end items-center">
        <Button
          label="Logout"
          //   left={
          //     <MailIcon
          //       className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
          //       aria-hidden="true"
          //     />
          //   }
        />
      </div>
      {/* )} */}
      <div className="w-full mt-3">
        <Footer />
      </div>
      {/* </div> */}
    </div>
  );
}
