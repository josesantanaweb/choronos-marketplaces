"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import clsx from "clsx";
import { BsShare } from "react-icons/bs";

// Utils and hooks
import { ComponentVisible } from "@/hooks/useVisible";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

// Assets
import CopyIcon from "@/assets/icons/copy.svg";
import CopyGradientIcon from "@/assets/icons/gradiants/copy.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import TwitterGradientIcon from "@/assets/icons/gradiants/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import FacebookGradientIcon from "@/assets/icons/gradiants/facebook.svg";

type ShareSize = "small" | "large";

interface ShareButtonProps {
  disabled?: boolean;
  size?: "small" | "large";
  twitterUrl?: string;
  facebookUrl?: string;
  copyUrl?: string;
}

const ShareButton = ({
  size = "large",
  disabled = false,
  twitterUrl = "",
  facebookUrl = "",
  copyUrl = "",
}: ShareButtonProps) => {

  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const sizeClasses = {
    small: "h-[40px] w-[40px] rounded-xl text-lg",
    large: "h-[55px] w-[55px] rounded-20 text-xl",
  };

  const getSizeClass = (size: ShareSize) => sizeClasses[size] || "";

  const handleOpen = () => setIsVisible(!isVisible);

  const handleCopy = () => {
    copyToClipboard(copyUrl);
    setIsVisible(false);
  };

  const classes = clsx(
    "flex overflow-hidden relative items-center justify-center text-white before-gradient-purple-100 after-gradient-purple-200-on-hover",
    {
      [getSizeClass(size)]: true,
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <div ref={ref} className="relative">
      <button
        onClick={handleOpen}
        className={classes}
        disabled={disabled}
        data-testid="button"
      >
        <span className="relative z-30">
          <BsShare />
        </span>
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute top-[110%] -left-[135px] z-30 p-2 rounded-2xl bg-purple-dark-500 min-w-[193px]`}
          >
            <li
              className={`text-white mb-1 list-none rounded-2xl p-3 text-xs cursor-pointer group relative overflow-hidden after-gradient-purple-100-on-hover bg-purple-dark-400`}
              onClick={handleCopy}
            >
              <span className="relative z-30 flex items-center gap-3">
                <Image
                  src={CopyIcon}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-0 group-hover:opacity-100 absolute left-[3px] top-[3px] transition-all"
                  alt="copy"
                />
                <Image
                  src={CopyGradientIcon}
                  width={24}
                  height={24}
                  className="w-6 h-6 transition-all opacity-100 group-hover:opacity-0"
                  alt="copy"
                />
                Copy Link
              </span>
            </li>
            <Link
              href={twitterUrl}
              target="_blank"
              className={`text-white mb-1 flex list-none rounded-2xl p-3  text-xs cursor-pointer group relative overflow-hidden after-gradient-purple-100-on-hover bg-purple-dark-400`}
            >
              <span className="relative z-30 flex items-center gap-3">
                <Image
                  src={TwitterIcon}
                  width={24}
                  height={24}
                  className="absolute top-0 left-0 w-6 h-6 transition-all opacity-0 group-hover:opacity-100"
                  alt="copy"
                />
                <Image
                  src={TwitterGradientIcon}
                  width={24}
                  height={24}
                  className="w-6 h-6 transition-all opacity-100 group-hover:opacity-0"
                  alt="copy"
                />
                Share on Twitter
              </span>
            </Link>
            <Link
              href={facebookUrl}
              target="_blank"
              className={`text-white flex list-none rounded-2xl p-3  text-xs cursor-pointer group relative overflow-hidden after-gradient-purple-100-on-hover bg-purple-dark-400`}
            >
              <span className="relative z-30 flex items-center gap-3">
                <Image
                  src={FacebookIcon}
                  width={24}
                  height={24}
                  className="absolute top-0 left-0 w-6 h-6 transition-all opacity-0 group-hover:opacity-100"
                  alt="copy"
                />
                <Image
                  src={FacebookGradientIcon}
                  width={24}
                  height={24}
                  className="w-6 h-6 transition-all opacity-100 group-hover:opacity-0"
                  alt="copy"
                />
                Share on Facebook
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(ShareButton);
