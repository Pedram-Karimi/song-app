import { createContext, useContext, useState, useEffect } from "react";

type ChildComponents = {
  children: JSX.Element;
};

const UserAthCtx = createContext<any>(null);

export const UserAthCtxProvider = ({ children }: ChildComponents) => {
  const [user, setUser] = useState<string | null>();

  const changeUser = (data: any) => {
    setUser(data);
  };

  useEffect(() => {
    let data = localStorage.getItem("user");
    setUser(
      JSON.parse(typeof data === "string" && data !== null ? data : "{}")
    );
  }, []);
  return (
    <UserAthCtx.Provider value={{ user, changeUser }}>
      {children}
    </UserAthCtx.Provider>
  );
};

export function useUserAuth() {
  return useContext(UserAthCtx);
}
