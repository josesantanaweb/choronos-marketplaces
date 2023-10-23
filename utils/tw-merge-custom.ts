import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  classGroups: {
    beforeGradient: [
      "before-none",
      "before-gradient-purple-100",
      "before-gradient-purple-200",
      "before-gradient-purple-100-on-hover",
      "before-gradient-purple-200-on-hover",
    ],
    afterGradient: [
      "after-none",
      "after-gradient-purple-100",
      "after-gradient-purple-200",
      "after-gradient-purple-100-on-hover",
      "after-gradient-purple-200-on-hover",
    ],
    rounded: [
      "rounded-all-20",
      "rounded-all-full",
      "rounded-all-lg",
      "rounded-all-2xl",
    ],
  },
});

export default twMerge;
