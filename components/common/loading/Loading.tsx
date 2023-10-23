import { twMerge } from "tailwind-merge";

interface ILoadingProps {
  text?: string;
  className?: string;
}

export default function Loading(props: ILoadingProps) {
  const { text = 'Loading More Results', className } = props;

  return (
    <div className={twMerge("flex flex-col items-center text-white pt-[7px]", className)}>
      <div className="relative -left-[9999px] flex items-center bg-white w-[10px] h-[10px] rounded-full mix-blend-overlay mb-[11px] animate-[loadingDotsTyping_1.4s_linear_infinite] shadow-[9979px_0_0_0_#fff,9999px_0_0_0_#fff,10019px_0_0_0_#fff]">
      </div>

      <div className="text-[15px] opacity-50">{text}</div>
    </div>
  );
}
