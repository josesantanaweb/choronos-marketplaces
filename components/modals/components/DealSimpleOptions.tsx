import { useState } from "react";

import Image from "next/image";

import { LightningIcon, PencilIcon } from "@/components/common/icons";
import { TbGavel } from "react-icons/tb";

import twMerge from "@/utils/tw-merge-custom";

import ChronosLargeImage from "@/assets/components/listing/chronos-large.png";

interface IDealOptionPrice {
  eth: number;
  usd: number;
}

interface IDealOptionFixedPriceProps {
  status: "fixed_price";
  className?: string;
  data: {
    price: IDealOptionPrice;
  };
}

interface IDealOptionCustomOfferProps {
  status: "custom_offer";
  className?: string;
}

interface IDealOptionCustomOfferSimpleProps {
  status: "custom_offer_bid";
  className?: string;
  data?: {
    min_price: IDealOptionPrice;
  };
}

interface IInputETHProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

function FixedPriceElem(props: { price: IDealOptionPrice }) {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/ethereum.png"
          width={36}
          height={36}
          alt="Ethereum"
        />
        <div>
          <div className="text-base leading-none mb-2">
            {props.price?.eth?.toLocaleString()} ETH
          </div>
          <div className="text-xs leading-none opacity-50">
            ${props.price?.usd?.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Image src={ChronosLargeImage} width={38} height={38} alt="Chronos" />

        <div>
          <div className="text-base leading-none mb-2">0 CHR</div>
          <div className="text-xs leading-none opacity-50">Auto Swap</div>
        </div>
      </div>
    </>
  );
}

function InputETH(props: IInputETHProps) {
  return (
    <div className="flex items-center gap-2.5 max-w-[208px]">
      <Image src="/images/ethereum.png" width={36} height={36} alt="Ethereum" />
      <input
        className="w-full h-10 bg-blue-chronos-900 border-none outline-none text-white placeholder:opacity-50 placeholder:text-white hover:placeholder:opacity-100 focus:placeholder:opacity-100 placeholder:transition-opacity px-4 py-2.5 rounded-2xl text-base"
        placeholder="0"
        type="number"
        min={0}
        value={props.value}
        onChange={(e) =>
          props.onChange(
            e.target.value ? parseFloat(e.target.value) : undefined
          )
        }
      />
    </div>
  );
}

export default function DealSimpleOptions(
  props:
    | IDealOptionFixedPriceProps
    | IDealOptionCustomOfferProps
    | IDealOptionCustomOfferSimpleProps
) {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);

  return (
    <div
      className={twMerge(
        `flex items-center justify-between relative overflow-hidden rounded-15 bg-purple-violet-100 text-white p-5`,
        props.className
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-gradient-purple-100">
          {props.status === "fixed_price" && <LightningIcon size={20} />}
          {props.status === "custom_offer" && <PencilIcon size={20} />}
          {props.status === "custom_offer_bid" && <TbGavel size={16} />}
        </div>

        <span>
          {props.status === "fixed_price" && "Fixed Price"}

          {(props.status === "custom_offer" ||
            props.status === "custom_offer_bid") &&
            "Custom Offer"}

          {props.status === "custom_offer_bid" && (
            <span className="text-xs leading-none opacity-50 block mt-0.5">
              Minimum Price: {props.data?.min_price.eth?.toLocaleString()} ETH
            </span>
          )}
        </span>
      </div>

      {props.status === "fixed_price" && (
        <FixedPriceElem price={props.data.price} />
      )}

      {(props.status === "custom_offer" ||
        props.status === "custom_offer_bid") && (
        <InputETH value={inputValue} onChange={setInputValue} />
      )}
    </div>
  );
}
