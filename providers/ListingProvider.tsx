import { createContext, useState } from "react";

interface ListingContextProps {
  NFTSelected: string;
  setNFTSelected: (NFTSelected: string) => void;
}

interface ListingProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ListingContext = createContext<ListingContextProps>(
  {} as ListingContextProps
);

export const ListingProvider = ({ children }: ListingProviderProps) => {
  const [NFTSelected, setNFTSelected] = useState<string>("chrNFT");
  return (
    <ListingContext.Provider
      value={{
        NFTSelected,
        setNFTSelected,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
