"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface IMenu {
  name: string;
  link: string;
}
export interface IDropdownMenuProps {
  menu: IMenu[];
  openMenu: boolean;
}

const UserDropdown = (props: IDropdownMenuProps) => {
  const { menu, openMenu } = props;

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.nav
          transition={{ duration: 0.3, ease: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="user-dropdown backdrop-blur-[25px]"
        >
          {menu.map((item, index) => (
            <li className="mb-2.5 list-none last:mb-0" key={index}>
              <Link
                href={item.link}
                className="relative z-30 block px-8 py-2 text-xs text-center text-white rounded-all-full cursor-pointer bg-purple-dark-100 bg-opacity-30 after-gradient-purple-100-on-hover"
              >
                <div className="relative z-40">{item.name}</div>
              </Link>
            </li>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default UserDropdown;
