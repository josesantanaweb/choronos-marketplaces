import Image from "next/image";

import twMerge from "@/utils/tw-merge-custom";

import ChronosLargeImage from "@/assets/components/listing/chronos-large.png";

interface IPayWithCHRProps {
  className?: string;
  text?: string;
  TextClassName?: string;
  onClick?: () => void;
  iconSize?: number;
}

export default function PayWithCHR(props: IPayWithCHRProps) {
  const {
    className = '',
    text = "Pay with CHR",
    TextClassName = "",
    onClick,
    iconSize = 10,
  } = props;

  return (
    <button
      className={twMerge(
        "flex text-white items-center leading-none",
        className
      )}
      onClick={onClick}
    >
      <Image
        src={ChronosLargeImage}
        width={iconSize}
        height={iconSize}
        alt="Chronos"
        className="mr-[5px] shrink-0"
      ></Image>

      <span className={TextClassName}>{text}</span>
    </button>
  );
}
