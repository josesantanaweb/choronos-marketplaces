import Selector from "@/components/home/stats/Selector";

import twMerge from "@/utils/tw-merge-custom";

interface IOfferDurationProps {
  className?: string;
  value: string;
  onSelect: (value: string) => void;
}

const OfferDuration = (props: IOfferDurationProps) => {
  const { className, value, onSelect } = props;

  return (
    <div
      className={twMerge(
        `pt-[17px] pb-[15px] pr-[21px] pl-[20px] bg-purple-violet-100 flex items-center rounded-[16.013px]`,
        className
      )}
    >
      <div className="mr-auto mt-[2px] text-white text-[12px] font-medium leading-normal">
        <span>Duration</span>
      </div>
      <Selector
        value={value}
        options={[
          { name: "1 Week", value: "1_week" },
          { name: "2 Weeks", value: "2_weeks" },
          { name: "1 Month", value: "1_month" },
          { name: "3 Months", value: "3_months" },
          { name: "6 Months", value: "6_months" },
        ]}
        size="small"
        onSelect={(value: any) => onSelect(value)}
      />
    </div>
  );
}

export default OfferDuration;
