import Select from "react-select";
import "./selectComponent.css";

import { Controller } from "react-hook-form";

type Props = {
  placeHolder?: string;
  label?: string;
  data?: any[];
  setValue?: Function;
  control?: any;
  inputRef: string;
  isDisabled?: boolean;
  cataSelect?: boolean;
  
};
const customStyles = {
  option: (provided:any) => ({
    ...provided,
    minHeight: "auto",
    maxHeight: "auto",
    padding: "10px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.2",
    color: "#141414",
    border: "0",
    cursor: "pointer",
    background:
      "linear-gradient(180deg, rgba(20, 20, 20, 0.40) 0%, rgba(20, 20, 20, 0.40) 100%);",
  }),
  placeholder: (base:any, state:any) => ({
    ...base,
    width: "100%",
    justifyContent: "center",
    top: state.isFocused ? "12px" : "6px",
    right: "0px",
    color: "#969696",
    padding: "0px",
  }),
  singleValue: (provided:any) => ({
    ...provided,
    color: "#000000", // Set the color to black (#000000)
  }),
  menu: (base:any) => ({
    ...base,
    width: "max-content",
    minWidth: "100%",
    border: "0",
    cursor: "pointer",
    margin: "10px 0 0",
    fontFamily: "Arial",
    zIndex: "99",
    boxShadow: "0px 3px 6px rgba(var(--black-rgb), 0.25) !important",
  }),
  menuList: (base:any) => ({
    ...base,
    padding: 0,
    border: "none",
    color: "#141414",
    cursor: "pointer",
    fontFamily: "Arial",
    zIndex: "99",
  }),
  control: (base:any) => ({
    ...base,
    borderRadius: "1.875rem",
    background:
      "linear-gradient(180deg, rgba(20, 20, 20, 0.40) 0%, rgba(20, 20, 20, 0.40) 100%)",
    border: "none",
    outline: "none",
    color: "#141414",
    fontFamily: "Arial",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    padding: "8px",

  }),
};


const SelectComponent = ({
  label,
  placeHolder,

  data,
  isDisabled = false,
  setValue = () => {},
  control,
  inputRef,
  cataSelect = true,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Controller
        name={inputRef}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <p className="input-label ml-3" >
              {label}
            </p>
            <div className="select-container w-full">
              <Select
                options={data}
                getOptionLabel={(option: any) => {
                  return option.value;
                }}
                getOptionValue={(option: any) => String(option.value)}
                styles={customStyles}
                placeholder={placeHolder}
                onChange={(e: any) => {
                  onChange(e.value);
                  if (cataSelect) {
                    setValue(e.value);
                  }
                }}
                isDisabled={isDisabled}
              />
            </div>
          </>
        )}
        rules={{ required: true }}
      />
    </div>
  );
};

export default SelectComponent;
