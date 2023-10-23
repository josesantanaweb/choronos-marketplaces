"use client";

import Image from "next/image";
import moment from "moment";

import BNB from "@/assets/tokens/BNB.svg";
import Girl from "@/assets/components/profile/girl.png";
import Boy from "@/assets/components/profile/boy.png";
import Key from "@/assets/components/profile/art-key.png";
import { IRow } from "@/interfaces";

export interface ITableItemProps {
  row: IRow
}

const TableItem = (props: ITableItemProps) => {
  const { row } = props;
  return (
    <div className="grid grid-cols-6 items-center py-2 px-6 bg-purple-dark-500 rounded-2xl mb-4 last:mb-0 hover:bg-purple-dark-300">
      <div>
        <h4 className="text-base text-white">{row?.category}</h4>
        <p className="text-sm text-white">as fixed price</p>
      </div>
      <div className="flex items-center gap-3 bg-purple-dark-700 rounded-2xl w-[230px]">
        <Image
          src={Key}
          alt="crypto"
          width={56}
          height={56}
          className="rounded-xl w-14 h-14"
        />
        <div>
          <h4 className="text-sm text-white truncate w-34">
            Chronos Key #0001
          </h4>
          <p className="text-xs text-purple-chronos truncate w-34">
            {row?.name}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={BNB}
          alt="crypto"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <div>
          <h4 className="text-base text-white">{row?.price} ETH</h4>
          <p className="text-xs text-gray-400">$00,000,00</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={Girl}
          alt="crypto"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <div>
          <h4 className="text-base text-white">Offered by</h4>
          <p className="text-xs text-purple-chronos">0xa1b2c3d4e5...</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={Boy}
          alt="crypto"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <div>
          <h4 className="text-base text-white">Offered to</h4>
          <p className="text-xs text-purple-chronos">0xa1b2c3d4e5...</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-white">
          {moment(row?.date, "DDMMYYYY").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default TableItem;
