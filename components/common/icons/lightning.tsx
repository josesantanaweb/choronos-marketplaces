"use client";

import React from "react";

export interface IIconProps {
  size?: number;
  activeGradient?: boolean;
  activeGradientOnGroupHover?: boolean;
  gradientTransition?: boolean;
}

const LightningIcon = (props: IIconProps) => {
  const {
    size,
    activeGradient = false,
    activeGradientOnGroupHover = false,
    gradientTransition = true,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 18 16"
      fill="none"
    >
      <path
        d="M7.36875 13.1188L12.6 7.675H9.225L9.9 3.0275L5.15625 8.975H8.04375L7.36875 13.1188ZM6 14.5L6.75 9.95H3L9.75 1.5H11.25L10.5 6.7H15L7.5 14.5H6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LightningIcon;
