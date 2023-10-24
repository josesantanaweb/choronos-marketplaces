"use client";

import { FiUpload } from "react-icons/fi";
import Image from "next/image";

import DefaultAvatar from "@/assets/components/dashboard/avatar-default.png";

export interface IUploadProps {
  onChange: (e: any) => void;
  label: string;
  file: string;
  description: string;
  isCover?: boolean;
}

const Upload = (props: IUploadProps) => {
  const { onChange, label, file, description, isCover } = props;

  return (
    <div>
      <label htmlFor="#" className="text-white text-sm mb-3 block">
        {label}
      </label>
      <div className="flex items-center bg-purple-dark-500 rounded-2xl p-4 justify-between">
        <Image
          src={file || DefaultAvatar}
          alt="avatar"
          width={100}
          height={100}
          className={`${isCover ? 'rounded-xl' : 'rounded-full'} w-20 h-20 md:w-28 md:h-28`}
        />
        <div className="md:w-3/5 flex flex-col justify-center items-center">
          <h5 className="text-white text-sm mb-3">{description}</h5>
          <label
            htmlFor={label}
            className="before-gradient-purple-100 after-gradient-purple-200-on-hover flex relative cursor-pointer items-center justify-center text-white border-none overflow-hidden w-fit px-8 md:px-12 h-9 md:h-14 text-sm md:text-base rounded-full"
          >
            <span className="flex items-center gap-3 z-30">
              <FiUpload size={16} />
              Upload Image
            </span>
            <input
              type="file"
              onChange={onChange}
              id={label}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Upload;
