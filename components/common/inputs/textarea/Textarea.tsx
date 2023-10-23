"use client";

export interface ITextareaProps {
  disabled?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  label,
  disabled,
  name,
  placeholder,
  onChange,
}: ITextareaProps) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm mb-2 block text-white">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        disabled={disabled || false}
        placeholder={placeholder || ""}
        onChange={onChange}
        className="bg-purple-dark-400 rounded-2xl text-sm w-full h-32 text-gray-400 p-4 outline-none bg-opacity-50"
      />
    </div>
  );
};

export default Textarea;
