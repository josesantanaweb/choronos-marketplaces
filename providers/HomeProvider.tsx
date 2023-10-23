import { createContext } from "react";

interface HomeContextProps {
  children?: JSX.Element | JSX.Element[];
}

export const HomeContext = createContext<HomeContextProps | null>(null);

export const HomeProvider = ({ children }: HomeContextProps) => {
  return (
    <HomeContext.Provider value={{}}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
