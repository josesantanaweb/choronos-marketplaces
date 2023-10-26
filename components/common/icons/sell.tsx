"use client";

import React from "react";

import createRandomString from "@/utils/create-random-string";

export interface IIconProps {
  size?: number;
  activeGradient?: boolean;
  activeGradientOnGroupHover?: boolean;
  gradientTransition?: boolean;
}

const SellIcon = (props: IIconProps) => {
  const {
    size,
    activeGradient = false,
    activeGradientOnGroupHover = false,
    gradientTransition = true,
  } = props;

  const id = createRandomString();

  return (
    <svg viewBox="0 0 21 22" width={size}>
      <path
        d="M12.2281 19.7772C11.9656 20.0522 11.6484 20.1897 11.2766 20.1897C10.9047 20.1897 10.5875 20.0522 10.325 19.7772L2.12188 11.1835C1.97604 11.0307 1.8776 10.8703 1.82656 10.7022C1.77552 10.5342 1.75 10.3585 1.75 10.1752V3.2085C1.75 2.81127 1.87396 2.4828 2.12188 2.22308C2.36979 1.96336 2.68333 1.8335 3.0625 1.8335H9.7125C9.8875 1.8335 10.0625 1.86023 10.2375 1.9137C10.4125 1.96718 10.5729 2.0703 10.7188 2.22308L18.8781 10.771C19.1552 11.0613 19.2938 11.4012 19.2938 11.7908C19.2938 12.1804 19.1552 12.5203 18.8781 12.8106L12.2281 19.7772ZM11.3313 18.8377L17.9813 11.871L9.7125 3.2085H3.0625V10.1752L11.3313 18.8377ZM5.35938 6.7835C5.66563 6.7835 5.93177 6.66509 6.15781 6.42829C6.38385 6.19148 6.49688 5.91266 6.49688 5.59183C6.49688 5.271 6.38385 4.99218 6.15781 4.75537C5.93177 4.51857 5.66563 4.40016 5.35938 4.40016C5.05313 4.40016 4.78698 4.51857 4.56094 4.75537C4.3349 4.99218 4.22188 5.271 4.22188 5.59183C4.22188 5.91266 4.3349 6.19148 4.56094 6.42829C4.78698 6.66509 5.05313 6.7835 5.35938 6.7835Z"
        fill="currentColor"
        className={`${
          activeGradient
            ? "opacity-0"
            : activeGradientOnGroupHover
            ? "group-hover:opacity-0 opacity-100"
            : ""
        } ${
          gradientTransition
            ? "transition-opacity"
            : ""
        } icon`}
      />

      <g clipPath={`url(#clip0${id})`}>
        <path
          d="M10.2555 17.9791C10.0055 18.2291 9.70345 18.3541 9.34928 18.3541C8.99512 18.3541 8.69303 18.2291 8.44303 17.9791L0.630534 10.1666C0.491645 10.0277 0.397895 9.8819 0.349284 9.72913C0.300673 9.57635 0.276367 9.41663 0.276367 9.24996V2.91663C0.276367 2.55551 0.394423 2.2569 0.630534 2.02079C0.866645 1.78468 1.16526 1.66663 1.52637 1.66663H7.8597C8.02637 1.66663 8.19303 1.69093 8.3597 1.73954C8.52637 1.78815 8.67914 1.8819 8.81803 2.02079L16.5889 9.79163C16.8528 10.0555 16.9847 10.3645 16.9847 10.7187C16.9847 11.0729 16.8528 11.3819 16.5889 11.6458L10.2555 17.9791ZM9.40137 17.125L15.7347 10.7916L7.8597 2.91663H1.52637V9.24996L9.40137 17.125ZM3.71387 6.16663C4.00553 6.16663 4.25901 6.05899 4.47428 5.84371C4.68956 5.62843 4.7972 5.37496 4.7972 5.08329C4.7972 4.79163 4.68956 4.53815 4.47428 4.32288C4.25901 4.1076 4.00553 3.99996 3.71387 3.99996C3.4222 3.99996 3.16873 4.1076 2.95345 4.32288C2.73817 4.53815 2.63053 4.79163 2.63053 5.08329C2.63053 5.37496 2.73817 5.62843 2.95345 5.84371C3.16873 6.05899 3.4222 6.16663 3.71387 6.16663Z"
          fill={`url(#paint0_linear${id})`}
          className={`${
            activeGradient
              ? ""
              : activeGradientOnGroupHover
              ? "group-hover:opacity-100 opacity-0"
              : "opacity-0"
          } ${
            gradientTransition
              ? "transition-opacity"
              : ""
          } icon_gradient`}
        />
      </g>

      <defs>
        <linearGradient
          id={`paint0_linear${id}`}
          x1="0.602701"
          y1="16.5729"
          x2="19.0025"
          y2="8.96064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F4AB3" />
          <stop offset="1" stopColor="#7A64D0" />
        </linearGradient>
        <clipPath id={`clip0${id}`}>
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.470703)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SellIcon;
