"use client";

import { motion, AnimatePresence } from "framer-motion";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";

import twMerge from "@/utils/tw-merge-custom";
0;
import { ComponentVisible } from "@/hooks/useVisible";

export interface IMenuProps {
  menu: string[];
  className?: string;
  isMobile?: boolean;
}

export interface IMenuItemProps {
  item: string;
  className?: string;
  onClick: () => void;
}

const MenuItem = (props: IMenuItemProps) => {
  const { item, onClick, className = "" } = props;

  const transitionButton = `
    after:content-['']
    after:absolute
    after:top-0
    after:left-0
    after:z-10
    after:w-full
    after:h-full
    after:opacity-0
    after:transition-opacity
   
   
    after:bg-gradient-purple-100
    hover:after:opacity-100
  `;

  const buttonClass = `
    flex
    items-center
    justify-center
    px-4
    w-full
    h-14
    text-sm
    text-center
    relative
    text-white
    cursor-pointer
    overflow-hidden
    transition-all
    bg-purple-dark-600
    ${transitionButton}
  `;

  return (
    <li className="list-none w-full">
      <a href="#" className={twMerge(buttonClass, className)} onClick={onClick}>
        <span className="relative z-30">{item}</span>
      </a>
    </li>
  );
};

const Menu = (props: IMenuProps) => {
  const { menu, className = "", isMobile } = props;

  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const handleItem = () => {
    setIsVisible(false);
  };

  if (isMobile) {
    return (
      <div ref={ref} className="relative block lg:hidden">
        <ButtonIcon
          icon="menu-3-fill"
          selected={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        />

        <AnimatePresence>
          {isVisible && (
            <motion.nav
              transition={{ duration: 0.3, ease: "linear" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-4 px-2 overflow-hidden rounded-3xl rounded-t-none bg-purple-dark-600 ${className} absolute top-full right-0 mt-1 w-[100px] z-30"
            >
              <ul className="flex flex-col items-center gap-1">
                {menu.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    onClick={handleItem}
                    className="h-[28px] w-full rounded-all-20 uppercase"
                  />
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <nav
      className={`overflow-hidden rounded-3xl bg-purple-dark-600 w-full md:max-w-[222px] hidden lg:block ${className}`}
    >
      <ul className="flex items-center">
        {menu.map((item, index) => (
          <MenuItem item={item} onClick={handleItem} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
