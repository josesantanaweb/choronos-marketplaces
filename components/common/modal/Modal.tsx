import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { XCircleIcon } from "@/components/common/icons";

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  dontCloseOnClickedOutside?: boolean;

  title?: string;
  children: any;

  width?: string;
  hideFooter?: boolean;
  footer?: any;
  className?: string;
  titleClassName?: string;
  titleBorder?: boolean;
  hideBg?: boolean;
  hidePaddings?: boolean;

  showButtonToDissmiss?: boolean;
}

export default function Modal(props: ModalProps) {
  const {
    open,
    setOpen,
    title,
    children,
    width,
    className = "",
    titleClassName = "",
    hideBg = false,
    hidePaddings,
    showButtonToDissmiss = true,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape, true);
    return () => {
      document.removeEventListener("keydown", handleEscape, true);
    };
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          transition={{ duration: 0.3, ease: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`text-white fixed top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center backdrop-blur-[25px]`}
          style={{
            background:
              "radial-gradient(80.62% 80.62% at 50% 19.38%, #2D283E55 0.01%, rgba(26, 23, 40, 0.5) 100%)",
          }}
        >
          <div className={`absolute z-0 w-full h-full`} onClick={handleClose} />
          <motion.div
            variants={{
              show: {
                y: 0,
                transition: {
                  duration: 0.35,
                  ease: [0.15, 1.15, 0.6, 1],
                },
              },
              hidden: {
                y: "100%",
                transition: {
                  duration: 0.35,
                  ease: "linear",
                },
              },
            }}
            animate="show"
            initial="hidden"
            exit="hidden"
            className={`z-1 rounded-[20px] sm:rounded-[30px] mx-[20px] sm:mx-[40px] ${
              !hideBg && "bg-[#383D69]"
            } ${className}`}
            style={{
              width: width || "fit-content",
            }}
          >
            <div
              className={`relative flex h-full flex-col ${
                !hidePaddings && "px-[21px] py-[27px] sm:p-[30px]"
              }`}
            >
              {showButtonToDissmiss && (
                <button
                  className="group absolute top-[20px] right-[20px] sm:top-[30px] sm:right-[30px]"
                  aria-label="Close modal"
                  onClick={handleClose}
                >
                  <XCircleIcon size={16} activeGradientOnGroupHover={true} />
                </button>
              )}
              {!!title && (
                <h3
                  className={`w-full text-left text-[14px] leading-[15px] font-medium sm:text-[22px] sm:leading-[28px] ${titleClassName}`}
                >
                  {title}
                </h3>
              )}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
