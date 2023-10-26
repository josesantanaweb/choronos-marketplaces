import Image from "next/image";

import twMerge from "@/utils/tw-merge-custom";
import React from "react";

interface INTFSimpleProps {
  size?: "small" | "default";
  image: string;
  title: string;
  subtitle: string;
  className?: string;
  iconButton?: React.ReactNode;
  onClickButton?: () => void;
}

const SimpleNFT = (props: INTFSimpleProps) => {
  const {
    size = "default",
    image,
    title,
    subtitle,
    className,
    iconButton,
    onClickButton,
  } = props;

  const imageDimentionBySize = {
    small: {
      width: 104.43,
      height: 120,
    },
    default: {
      width: 110,
      height: 126,
    },
  };

  const imageClassBySize = {
    small: "w-[64px] h-[73px] sm:w-[104.43px] sm:h-[120px]",
    default: "w-[110px] h-[126px]",
  }

  const fontSizeBySize = {
    small: {
      title: "text-base sm:text-xl",
      subtitle: "text-xs md:text-sm",
    },
    default: {
      title: "text-[22px]",
      subtitle: "text-base",
    },
  };
  const paddindBySize = {
    small: "px-2.5 xxs:px-6 py-1 sm:px-8 sm:py-2.5",
    default: "px-9 py-2.5",
  };
  const marginTitleBySize = {
    small: "mb-0.5 sm:mb-1",
    default: "mb-2.5",
  };

  return (
    <div
      className={twMerge(
        `flex items-center justify-start relative overflow-hidden rounded-xl sm:rounded-15 bg-purple-violet-100 text-white`,
        className
      )}
    >
      {iconButton && (
        <button className="absolute top-2.5 right-2.5 sm:top-5 sm:right-5 z-10 text-base sm:text-xl" onClick={onClickButton}>
          {iconButton}
        </button>
      )}

      {image && (
        <Image
          src={image}
          alt={title}
          width={imageDimentionBySize[size].width}
          height={imageDimentionBySize[size].height}
          className={`${imageClassBySize[size]} object-cover`}
        />
      )}

      <div className={`${paddindBySize[size]}`}>
        <h2
          className={`leading-none ${marginTitleBySize[size]} ${fontSizeBySize[size].title}`}
        >
          {title}
        </h2>
        <p
          className={`leading-none opacity-50 ${fontSizeBySize[size].subtitle}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default SimpleNFT;
