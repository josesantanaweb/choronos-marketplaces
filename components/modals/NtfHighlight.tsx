import { useState, useEffect } from "react";

import { FiTrash } from "react-icons/fi";

import { XCircleIcon } from "@/components/common/icons";

import Modal from "@/components/common/modal/Modal";
import SelectorDropdown from "@/components/modals/components/SelectorDropdown";
import NTFSimple from "@/components/modals/components/SimpleNFT";
import Button from "@/components/common/buttons/button/Button";

interface INTFHighlightProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NTFHighlightModal = (props: INTFHighlightProps) => {
  const [options, setOptions] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>();

  const data = [
    {
      id: 1,
      image: "/images/art-key.png",
      title: "Chronos Key #0001",
      subtitle: "Lost Keys of Chronos - #0001",
    },
    {
      id: 2,
      image: "/images/art-key.png",
      title: "Chronos Key #0002",
      subtitle: "Lost Keys of Chronos - #0002",
    },
    {
      id: 3,
      image: "/images/art-key.png",
      title: "Chronos Key #0003",
      subtitle: "Lost Keys of Chronos - #0003",
    },
    {
      id: 4,
      image: "/images/art-key.png",
      title: "Chronos Key #0004",
      subtitle: "Lost Keys of Chronos - #0004",
    },
    {
      id: 5,
      image: "/images/art-key.png",
      title: "Chronos Key #0005",
      subtitle: "Lost Keys of Chronos - #0005",
    },
  ];
  const { open, setOpen } = props;

  useEffect(() => {
    setOptions(data.map((item) => ({ value: item.id, label: item.title })));
  }, []);

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Highlight NFT"}
      hideFooter={true}
      width={"521px"}
    >
      <div className="h-[1px] sm:h-[2px] rounded-full bg-[#717AC4] my-[19px] sm:my-[25px]" />

      <div className={selected ? "mb-4 sm:mb-5" : ""}>
        <div className="flex justify-between items-center mb-3.5 sm:mb-5">
          <h2 className="text-md sm:text-lg leading-none">Select your NFT</h2>

          <button
            className="text-xs sm:text-sm leading-none flex items-center gap-[6px] opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setSelected(null)}
          >
            <span className="sm:text-base">
              <FiTrash />
            </span>
            <span>Clear Selection</span>
          </button>
        </div>

        <SelectorDropdown
          placeholder="Please select your NFT"
          onSelection={(value) => {
            setSelected(data.find((item) => item.id === value));
          }}
          options={options}
          value={selected?.id}
        />
      </div>

      {selected && (
        <>
          <div className="mb-2 sm:mb-5">
            <div className="mb-3.5 sm:mb-5">
              <h2 className="text-md sm:text-lg leading-none">
                Your Selection
              </h2>
            </div>

            <NTFSimple
              image={selected.image}
              size="small"
              title={selected.title}
              subtitle={selected.subtitle}
              iconButton={<XCircleIcon />}
              onClickButton={() => {
                setSelected(null);
              }}
            />
          </div>
          <Button className="w-full">Highlight Now</Button>
        </>
      )}
    </Modal>
  );
};

export default NTFHighlightModal;
