import Modal from "@/components/common/modal/Modal";
import NTFSimple from "@/components/modals/components/SimpleNFT";
import Button from "@/components/common/buttons/button/Button";
import DealOptionsSimple from "@/components/modals/components/DealSimpleOptions";
import PayWithCHR from "@/components/common/pay-chr/PayCHR";
import Alert from "@/components/modals/components/alert";

interface IMakeBidProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
}

const MakeBidModal = (props: IMakeBidProps) => {
  const { open, setOpen, item } = props;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Make a Bid"}
      hideFooter={true}
      width={"546px"}
    >
      <div className="h-[1px] sm:h-[2px] rounded-full bg-[#717AC4] my-[19px] sm:my-[25px]" />

      <Alert
        message="An Offer to buy needs the owner to accept. Your payment will be withheld by the marketplace. In case of Bids, you can not cancel a Bid offer, make sure your offer is right before make the bid."
        type="error"
        className="mb-5"
      />

      <NTFSimple
        image={item.image}
        size="small"
        title={item.title}
        subtitle={item.subtitle}
        className="mb-5"
      />

      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg leading-none">Confirm your Bid</h2>
        </div>
      </div>

      <div className="mb-5">
        <DealOptionsSimple status="custom_offer_bid" data={{ min_price: { eth: 132, usd: 564 } }} />
      </div>

      <Button className="w-full mb-6">Bid Now</Button>

      <PayWithCHR iconSize={24} className="mx-auto" text="Offer With CHR" />
    </Modal>
  );
}

export default MakeBidModal;
