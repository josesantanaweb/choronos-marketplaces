import Image from "next/image";

import Modal from "@/components/common/modal/Modal";

import Button from "@/components/common/buttons/button/Button";

interface ICancelListingProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
  realYield: string[];
}

const CancelListingModal = (props: ICancelListingProps) => {
  const { open, setOpen, item, realYield } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Cancel Listing"}
      hideFooter={true}
      width={"558px"}
    >
      <div className="h-[1px] sm:h-[2px] rounded-full bg-[#717AC4] my-[19px] sm:my-[25px]" />

      <Image
        src={item.image}
        width={315}
        height={315}
        alt={item.title}
        className="rounded-3xl mx-auto mb-5"
      />

      <div className="max-w-[315px] w-full mx-auto mb-5">
        <div className="text-lg">{item.title}</div>
        <div className="text-sm opacity-50 mb-4">{item.subtitle}</div>

        <div className="flex justify-between">
          <div>
            <div className="text-sm mb-1">Real Yield 01</div>
            <div className="opacity-75 text-xs">{realYield[0]}</div>
          </div>
          <div>
            <div className="text-sm mb-1">Real Yield 02</div>
            <div className="opacity-75 text-xs">{realYield[1]}</div>
          </div>
        </div>
      </div>

      <Button className="w-full">
        Confirm
      </Button>
    </Modal>
  );
}

export default CancelListingModal;
