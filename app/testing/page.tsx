"use client";

import ListingStat from "@/components/listing/ListingStats";
import Loading from "@/components/common/loading/Loading";

const TestingPage = () => {
  return (
    <div className="container mx-auto">

      <ListingStat />

      <Loading />
    </div>
  );
};

export default TestingPage;
