"use client";

import React from "react";

export interface IIconProps {
  size?: number;
  activeGradient?: boolean;
  activeGradientOnGroupHover?: boolean;
  gradientTransition?: boolean;
}

const PencilIcon = (props: IIconProps) => {
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
      viewBox="0 0 22 21"
      fill="none"
    >
      <path
        d="M12.1626 5.8533L15.5419 9.23261M4.13672 17.2585H7.51603L16.3867 8.38778C16.6086 8.16589 16.7846 7.90247 16.9047 7.61256C17.0248 7.32265 17.0866 7.01192 17.0866 6.69813C17.0866 6.38433 17.0248 6.0736 16.9047 5.78369C16.7846 5.49378 16.6086 5.23036 16.3867 5.00847C16.1648 4.78658 15.9014 4.61057 15.6115 4.49049C15.3216 4.3704 15.0109 4.30859 14.6971 4.30859C14.3833 4.30859 14.0725 4.3704 13.7826 4.49049C13.4927 4.61057 13.2293 4.78658 13.0074 5.00847L4.13672 13.8792V17.2585Z"
        stroke="white"
        strokeWidth="1.68966"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
