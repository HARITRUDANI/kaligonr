import React from "react";
import "./inputtype.css";

type Props = {
  label: string;
  placeHolder: string;
  name: string; 
  register?: Function;
  isDisabled?: boolean;
  rows?: number;
};

const InputComponent = ({
  label,
  placeHolder,
  name, 
  register = () => {},
  isDisabled = false,
  rows = 1,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <p className="input-lable ml-3" >
        {label}
      </p>
      <div className="flex justify-between w-full">
        {rows === 1 ? (
          <input
            className={`input-container w-full h-[3.125rem] pl-3`}
            {...register(name)} 
            placeholder={placeHolder}
            type="text"
            disabled={isDisabled}
          />
        ) : (
          <textarea
            className={`input-container w-full h-[6rem] p-3 resize-none`}
            {...register(name)}
            placeholder={placeHolder}
            disabled={isDisabled}
            rows={rows}
          />
        )}
      </div>
    </div>
  );
};

export default InputComponent;
