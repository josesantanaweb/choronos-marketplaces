import Modal from "@/components/common/modal/Modal";

import SpinerLoading from "@/components/modals/components/SpineLoading";

import Button from "@/components/common/buttons/button/Button";

interface ITransactionApprovingProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TransactionApprovingModal = (props: ITransactionApprovingProps) => {
  const { open, setOpen } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      hideFooter={true}
      width={"546px"}
    >
      <SpinerLoading className="mx-auto" />

      <div className="my-10 text-center">
        <h2 className="text-[25px] leading-none mb-[5px]">
          Approving Tokens
        </h2>
        <p className="mt-[10px] text-sm leading-none opacity-50">
          Approve the tokens needed to complete the transaction
        </p>
      </div>

      <Button className="w-full" onClick={() => setOpen(false)}>
        Close
      </Button>
    </Modal>
  );
}

export default TransactionApprovingModal;
