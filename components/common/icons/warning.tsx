"use client";

import React from "react";

export interface IIconProps {
  size?: number;
  activeGradient?: boolean;
  activeGradientOnGroupHover?: boolean;
  gradientTransition?: boolean;
}

const WarningIcon = (props: IIconProps) => {
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
      viewBox="0 0 43 43"
      fill="none"
    >
      <path
        d="M2.62109 37.0242L21.5945 4.25195L40.5679 37.0242H2.62109ZM7.10572 34.4369H36.0833L21.5945 9.42652L7.10572 34.4369ZM21.7745 31.979C22.1432 31.979 22.4498 31.8543 22.6941 31.6049C22.9385 31.3555 23.0606 31.0465 23.0606 30.6778C23.0606 30.3091 22.9359 30.0026 22.6866 29.7583C22.4371 29.5139 22.1281 29.3917 21.7595 29.3917C21.3908 29.3917 21.0842 29.5164 20.8399 29.7658C20.5955 30.0152 20.4734 30.3243 20.4734 30.6929C20.4734 31.0616 20.598 31.3681 20.8474 31.6125C21.0968 31.8568 21.4059 31.979 21.7745 31.979ZM20.4734 27.1925H23.0606V17.5333H20.4734V27.1925Z"
        fill="white"
      />
    </svg>
  );
};

export default WarningIcon;
