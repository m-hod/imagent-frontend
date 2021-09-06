import React, { SetStateAction, useState } from "react";

type Context = {
  navIsVisible: boolean;
  setNavIsVisible: React.Dispatch<SetStateAction<boolean>>;
};

export const LayoutContext =
  React.createContext<Context | undefined>(undefined);

export default function LayoutContextProvider({
  children,
}: {
  children: (props: Context) => React.ReactNode;
}) {
  const [navIsVisible, setNavIsVisible] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        navIsVisible,
        setNavIsVisible,
      }}
    >
      <LayoutContext.Consumer>
        {(value) => children(value!)}
      </LayoutContext.Consumer>
    </LayoutContext.Provider>
  );
}
