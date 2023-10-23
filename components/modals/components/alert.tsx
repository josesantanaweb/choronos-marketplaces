import { WarningIcon } from "@/components/common/icons";

import twMerge from "@/utils/tw-merge-custom";

interface IAlertProps {
  message: string;
  type: "warning" | "error" | "success";
  className?: string;
}

const Alert = (props: IAlertProps) => {
  const color = {
    warning: "bg-[#FFA500]",
    error: "bg-[#df3c64]",
    success: "bg-[#00FF00]",
  };

  const { message, type, className = "" } = props;

  return (
    <div
      className={twMerge(
        `flex items-center gap-4 p-4 ${color[type]} text-white rounded-xl`,
        className
      )}
    >
      <div className="flex items-enter justify-center shrink-0">
        <WarningIcon size={43} />
      </div>

      <div>
        <div className="text-sm leading-[normal]">{message}</div>
      </div>
    </div>
  );
}

export default Alert
