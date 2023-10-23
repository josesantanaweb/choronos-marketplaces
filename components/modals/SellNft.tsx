import { useState } from "react";
import Image from "next/image";
import { MdOutlineCampaign } from "react-icons/md";

import Modal from "@/components/common/modal/Modal";

import Button from "@/components/common/buttons/button/Button";
import OfferDuration from "@/components/offer-duration/OfferDuration";

import { MdInsights } from "react-icons/md";

interface ISellNFTProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
  realYield: string[];
  floorPrice: {
    usd: number;
    eth: number;
  };
}

function convertUSDToETH(usd: number) {
  return usd / 4000;
}

function convertETHtoUSD(eth: number) {
  return eth * 4000;
}

type ISellMethods = "fixed-price" | "auction";

const SellNFTModal = (props: ISellNFTProps) => {
  const [sellMethod, setSellMethod] = useState<ISellMethods>("fixed-price");
  const [usdPrice, setUSDPrice] = useState<number>(0);
  const [ethPrice, setETHPrice] = useState<number>(0);
  const [duration, setDuration] = useState<string>("1_week");

  const { open, setOpen, item, realYield, floorPrice } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Sell your NFT"}
      hideFooter={true}
      width={"915px"}
    >
      <div className="h-[1px] sm:h-[2px] rounded-full bg-[#717AC4] my-[19px] sm:my-[25px]" />

      <div className="flex gap-9">
        <div className="w-full">
          <div className="mb-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg leading-none">Sell Method</h2>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-15 bg-purple-violet-100 bg-opacity-50 text-white p-2 gap-2 mb-3.5">
            <Button
              size="small"
              className={`w-full before-none ${
                sellMethod === "fixed-price" ? "after:opacity-100" : ""
              }`}
              onClick={() => setSellMethod("fixed-price")}
            >
              Fixed Price
            </Button>
            <Button
              size="small"
              className={`w-full before-none ${
                sellMethod === "auction" ? "after:opacity-100" : ""
              }`}
              onClick={() => setSellMethod("auction")}
            >
              Auction
            </Button>
          </div>

          <div className="opacity-50 text-xs leading-none flex justify-center items-center gap-[5px] mx-auto mb-6">
            <MdOutlineCampaign size={20} />
            {sellMethod === "fixed-price" && <span>Sell at Fixed Price.</span>}
            {sellMethod === "auction" && (
              <span>The bid with the highest price wins the auction.</span>
            )}
          </div>

          <div className="flex gap-[18px] mb-5">
            <div className="w-full">
              <div className="text-lg leading-none mb-4">
                {sellMethod === "fixed-price" && "Price"}
                {sellMethod === "auction" && "Start Price"}
              </div>
              <div className="flex items-center justify-start w-full rounded-15 bg-purple-violet-100 text-white py-[15px] px-5 gap-2.5">
                <Image
                  src="/images/ethereum.png"
                  width={40}
                  height={40}
                  alt="Ethereum"
                />
                <div className="leading-none">
                  <input
                    className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent p-0 w-full h-[24px] placeholder:text-white mb-1 transition-opacity duration-300 ${
                      usdPrice ? "opacity-100" : "opacity-50 hover:opacity-100"
                    }`}
                    type="number"
                    value={ethPrice ? ethPrice : ""}
                    placeholder="0.00"
                    onChange={(e) => {
                      let value = e.target.value ? Number(e.target.value) : 0;

                      setETHPrice(value);
                      setUSDPrice(convertETHtoUSD(value));
                    }}
                  />
                  <label className="inline-block group pt-0.5 pb-px px-3 bg-blue-chronos-900 rounded-2xl max-w-[96px]">
                    <div
                      className={`flex items-center justify-center text-[12px] leading-none transition-opacity duration-300 ${
                        usdPrice
                          ? "opacity-100"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    >
                      <span>$</span>
                      <input
                        className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent p-0 placeholder:text-white w-full`}
                        type="number"
                        value={usdPrice ? usdPrice : ""}
                        placeholder="0.00"
                        onChange={(e) => {
                          let value = e.target.value
                            ? Number(e.target.value)
                            : 0;

                          setUSDPrice(value);
                          setETHPrice(convertUSDToETH(value));
                        }}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="text-lg leading-none mb-4">
                Actual Floor Price
              </div>
              <div className="flex items-center justify-start w-full rounded-15 bg-purple-violet-100 text-white py-[15px] px-5 gap-2.5">
                <Image
                  src="/images/ethereum.png"
                  width={40}
                  height={40}
                  alt="Ethereum"
                />
                <div className="leading-none">
                  <div className="w-full h-[24px] leading-[24px] mb-1">
                    {floorPrice.eth?.toLocaleString()} ETH
                  </div>
                  <label className="flex items-center px-3 bg-blue-chronos-900 rounded-2xl text-[12px] leading-none h-[18px] max-w-[96px]">
                    ${floorPrice.usd?.toLocaleString()}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <OfferDuration
            value={duration}
            onSelect={setDuration}
            className="mb-5"
          />

          <div className="flex items-center justify-center rounded-15 bg-purple-violet-100 text-white py-2.5 px-4 gap-4 mb-5">
            <span className="shrink-0">
              <MdInsights size={26} />
            </span>
            <span className="text-xs">
              List your NFT is totally free. When you make a sale, we take 5%
              fees in order to keep innovating our ecosystem everyday.
            </span>
          </div>

          <div className="flex items-center gap-11">
            <div className="shrink-0">
              <div className="text-sm mb-1">Confirm your Listing</div>
              <div className="text-xs">
                List your NFT to sell for {ethPrice.toLocaleString()} ETH
              </div>
            </div>
            <Button size="small" className="w-full">
              List Now
            </Button>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            width={315}
            height={315}
            className="rounded-3xl mb-5 mt-4"
          />
          <div className="text-lg">{item.title}</div>
          <div className="text-sm opacity-50 mb-4">{item.subtitle}</div>

          <div className="flex justify-between">
            <div>
              <div className="text-sm mb-1">Real Yield 01</div>
              <div className="opacity-75 text-xs">{realYield[0]}</div>
            </div>
            <div>
              <div className="text-sm mb-1">Real Yield 02</div>
              <div className="opacity-75 text-xs">{realYield[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SellNFTModal;
