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
  const fontSizeBySize = {
    small: {
      title: "text-xl",
      subtitle: "text-sm",
    },
    default: {
      title: "text-[22px]",
      subtitle: "text-base",
    },
  };
  const paddindBySize = {
    small: "px-8 py-2.5",
    default: "px-9 py-2.5",
  };
  const marginTitleBySize = {
    small: "mb-1",
    default: "mb-2.5",
  };

  return (
    <div
      className={twMerge(
        `flex items-center justify-start relative overflow-hidden rounded-15 bg-purple-violet-100 text-white`,
        className
      )}
    >
      {iconButton && (
        <button className="absolute top-5 right-5 z-10" onClick={onClickButton}>
          {iconButton}
        </button>
      )}

      {image && (
        <Image
          src={image}
          alt={title}
          width={imageDimentionBySize[size].width}
          height={imageDimentionBySize[size].height}
          style={{
            objectFit: "cover",
            width: imageDimentionBySize[size].width,
            height: imageDimentionBySize[size].height,
          }}
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
