import { useContext } from "react";
import { ListingContext } from "@/providers/ListingProvider";

export const useListing = () => {
  const { NFTSelected, setNFTSelected } = useContext(ListingContext);

  return {
    NFTSelected,
    setNFTSelected,
  };
};
