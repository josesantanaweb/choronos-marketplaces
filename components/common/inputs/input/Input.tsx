"use client";

export interface IInputProps {
  disabled?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  placeholder,
  onChange,
  disabled,
}: IInputProps) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm mb-2 block text-white">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        disabled={disabled || false}
        placeholder={placeholder || ""}
        onChange={onChange}
        className="bg-purple-dark-400 rounded-full md:rounded-2xl text-sm h-12 md:h-14 w-full text-gray-400 px-4 outline-none bg-opacity-50"
      />
    </div>
  );
};

export default Input;
