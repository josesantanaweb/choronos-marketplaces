import Image from "next/image";

import CheckGif from "@/assets/loading/check.gif";

import Modal from "@/components/common/modal/Modal";

import SpinerLoading from "@/components/modals/components/SpineLoading";

import Button from "@/components/common/buttons/button/Button";

interface ITransactionSuccessfulProps {
  itemName: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TransactionSuccessfulModal = (props: ITransactionSuccessfulProps) => {
  const { open, setOpen, itemName } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      hideFooter={true}
      width={"546px"}
    >
      <Image
        src={CheckGif}
        alt="Purchase Successful!"
        width={197}
        height={197}
        className="mx-auto"
      />

      <div className="my-10 text-center">
        <h2 className="text-[25px] leading-none mb-[5px]">
          Purchase Successful!
        </h2>
        <p className="mt-[10px] text-sm leading-none opacity-50">
          {itemName} has been send to your wallet, congrats!
        </p>
      </div>

      <Button className="w-full" onClick={() => setOpen(false)}>
        Close
      </Button>
    </Modal>
  );
}

export default TransactionSuccessfulModal;
