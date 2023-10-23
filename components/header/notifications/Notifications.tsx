import { motion, AnimatePresence } from "framer-motion";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";
import Notification from "./Notification";

import { ComponentVisible } from "@/hooks/useVisible";
import { INotificationItem } from "@/interfaces";

export interface INotificationsProps {
  notifications: INotificationItem[];
}

const Notifications = (props: INotificationsProps) => {
  const { notifications } = props;
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const handleOpenNotification = () => setIsVisible(!isVisible);

  return (
    <div ref={ref} className="relative">
      <ButtonIcon
        icon="sell"
        count={2}
        onClick={handleOpenNotification}
        selected={isVisible}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full mt-1 z-[100] right-0"
          >
            <div className="p-1 sm:p-1.5 bg-purple-dark-400 rounded-15 bg-opacity-60 backdrop-blur-[25px]">
              {notifications.map((notification: any, index: number) => {
                return (
                  <div key={index} className="mb-2.5 last:mb-0">
                    <Notification notification={notification} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
