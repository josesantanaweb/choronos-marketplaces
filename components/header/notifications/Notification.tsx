import Button from "@/components/common/buttons/button/Button";

import { INotificationItem } from "@/interfaces";

export interface INotificationProps {
  notification: INotificationItem;
}

export default function Notification(props: INotificationProps) {
  const { notification } = props;

  return (
    <div className="rounded-[12px] w-full min-w-[142px] sm:min-w-[164px] border border-white border-opacity-30 p-2.5 backdrop-blur-[25px]">
      <div className="text-white text-xs max-w-[94px] mb-1 sm:mb-[7px] leading-[15px] line-clamp-2">
        {notification.title}
      </div>
      <Button size="xsmall" link={notification.href} className="h-8">
        More info
      </Button>
    </div>
  );
}
