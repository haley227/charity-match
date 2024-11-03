import { ChangeEvent } from "react";

interface SelectableCardProps {
  displayName: string;
  inputValue: string;
  inputName: string;
  onClick: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  image?: string;
  description?: string;
}

export const SelectableCard = ({ displayName, inputValue, inputName, onClick, image, description }: SelectableCardProps) => {
  return (
    <div className="flex">
      <input type="checkbox" onChange={onClick} name={inputName} id={inputValue} value={inputValue} className="peer hidden" />
      <label htmlFor={inputValue} className="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-3 px-6 font-bold bg-white text-gray-900 transition-colors duration-200 ease-in-out hover:bg-violet-400 hover:text-white  peer-checked:text-white peer-checked:bg-violet-400 peer-checked:border-gray-200 ">
        {displayName}
      </label>
    </div>
  );
};
