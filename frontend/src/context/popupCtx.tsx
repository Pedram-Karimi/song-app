import { createContext, useContext, useState } from "react";

type ChildComponents = {
  children: JSX.Element;
};

const PopupCtx = createContext<any>(null);

export const PopupCtxProvider = ({ children }: ChildComponents) => {
  const [popupState, setPopupState] = useState<boolean>(false);
  const changePopupState = (value: boolean) => {
    setPopupState(value);
  };
  return (
    <PopupCtx.Provider value={{ popupState, changePopupState }}>
      {children}
    </PopupCtx.Provider>
  );
};

export function usePopupCtx() {
  return useContext(PopupCtx);
}
