import Image from "next/image";

import { HiOutlineBolt } from "react-icons/hi2";
import BNB from "@/assets/tokens/BNB.svg";

export interface IPriceInfoProps {
  price: string;
}

const PriceInfo = (props: IPriceInfoProps) => {
  const { price } = props;

  return (
    <div className="relative flex md:items-center gap-2.5 md:gap-3 py-2.5 px-3 md:p-2 bg-purple-dark-700 rounded-xl flex-col md:flex-row">
      <div>
        <h6 className="text-xs md:text-sm">Fixe Priced</h6>
        <p className="text-[10px] md:text-xs">30 Days Remaining</p>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <Image
          src={BNB}
          alt="crypto"
          width={15}
          height={15}
          className="w-[14px] h-[14px] md:w-[15px] md:h-[15px]"
        />
        <p className="text-xs md:text-sm uppercase">{price}</p>
      </div>

      <span className="absolute flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full -top-1 -left-2 bg-gradient-purple-100 text-[6px] md:text-[10px]">
        <HiOutlineBolt />
      </span>
    </div>
  );
};

export default PriceInfo;
