"use client";

import ListingContent from "@/components/listing/ListingContent";
import { ListingProvider } from "@/providers/ListingProvider";

const ListingPage = () => {
  return (
    <ListingProvider>
      <ListingContent />
    </ListingProvider>
  );
};

export default ListingPage;
