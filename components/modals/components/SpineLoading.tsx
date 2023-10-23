import Image from "next/image";

import twMerge from "@/utils/tw-merge-custom";

import SpinLoading from "@/assets/loading/spin-loading.png";

interface ISpineLoadingProps {
  className?: string;
  size?: number;
}

export default function SpineLoading(props: ISpineLoadingProps) {
  const { className, size = 150 } = props;
  return (
    <div
      className={twMerge("animate-spin", className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={SpinLoading} alt="Loading..." width={size} height={size} />
    </div>
  );
}
