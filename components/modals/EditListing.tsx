import Image from "next/image";

import { useState } from "react";

import { SellIcon } from "@/components/common/icons";

import { MdInsights } from "react-icons/md";

import Modal from "@/components/common/modal/Modal";
import NTFSimple from "@/components/modals/components/SimpleNFT";
import Button from "@/components/common/buttons/button/Button";
import OfferDuration from "@/components/offer-duration/OfferDuration";

interface IEditListingProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
}

function convertUSDToETH(usd: number) {
  return usd / 4000;
}

function convertETHtoUSD(eth: number) {
  return eth * 4000;
}

const EditListingModal = (props: IEditListingProps) => {
  const { open, setOpen, item } = props;
  const [usdPrice, setUSDPrice] = useState<number>(0);
  const [ethPrice, setETHPrice] = useState<number>(0);
  const [duration, setDuration] = useState<string>("1_week");

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Edit Listing"
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

      <div className="flex items-center justify-between rounded-15 bg-purple-violet-100 text-white p-5 gap-9 mb-5">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/ethereum.png"
            width={36}
            height={36}
            alt="Ethereum"
          />
          <input
            className="w-full h-10 bg-blue-chronos-900 border-none outline-none text-white placeholder:opacity-50 placeholder:text-white hover:placeholder:opacity-100 focus:placeholder:opacity-100 placeholder:transition-opacity px-4 py-2.5 rounded-2xl text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            value={ethPrice ? ethPrice : ""}
            placeholder="0.00"
            onChange={(e) => {
              let value = e.target.value ? Number(e.target.value) : 0;

              setETHPrice(value);
              setUSDPrice(convertETHtoUSD(value));
            }}
          />
        </div>

        <div className="flex items-center text-xs leading-none">
          <span>$</span>

          <input
            className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent p-0 placeholder:text-white w-full`}
            type="number"
            value={usdPrice ? usdPrice : ""}
            placeholder="0.00"
            onChange={(e) => {
              let value = e.target.value ? Number(e.target.value) : 0;

              setUSDPrice(value);
              setETHPrice(convertUSDToETH(value));
            }}
          />
        </div>
      </div>

      <OfferDuration value={duration} onSelect={setDuration} className="mb-5" />

      <div className="flex items-center justify-center rounded-15 bg-purple-violet-100 text-white py-2.5 px-4 gap-4 mb-5">
        <span className="shrink-0">
          <MdInsights size={26} />
        </span>
        <span className="text-xs">
          List your NFT is totally free. When you make a sale, we take 5% fees
          in order to keep innovating our ecosystem everyday.
        </span>
      </div>

      <Button className="w-full">Update</Button>
    </Modal>
  );
}

export default EditListingModal
