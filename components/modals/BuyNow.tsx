import { useState, useEffect } from "react";

import { SellIcon } from "@/components/common/icons";

import Modal from "@/components/common/modal/Modal";
import NTFSimple from "@/components/modals/components/SimpleNFT";
import Button from "@/components/common/buttons/button/Button";
import DealOptionsSimple from "@/components/modals/components/DealSimpleOptions";
import PayWithCHR from "@/components/common/pay-chr/PayCHR";

interface IBuyNowProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: {
    image: string;
    title: string;
    subtitle: string;
    price: {
      eth: number;
      usd: number;
    };
  };
}

export default function BuyNowModal(props: IBuyNowProps) {
  const { open, setOpen, item } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Buy Now"}
      hideFooter={true}
      width={"546px"}
    >
      <div className="h-[1px] sm:h-[2px] rounded-full bg-[#717AC4] my-[19px] sm:my-[25px]" />

      <NTFSimple
        image={item.image}
        size="small"
        title={item.title}
        subtitle={item.subtitle}
        className="mb-8"
      />

      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg leading-none">Confirm your Purchase</h2>

          <button
            className="text-sm leading-none flex items-center gap-[6px] opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => {}}
          >
            <span>
              <SellIcon size={15} />
            </span>
            <span>Make other offer</span>
          </button>
        </div>
      </div>

      <div className="mb-5">
        <DealOptionsSimple
          status="fixed_price"
          data={{ price: { eth: 1234, usd: 999999.99 } }}
        />
      </div>

      <Button className="w-full mb-6">Buy Now</Button>

      <PayWithCHR />
    </Modal>
  );
}
