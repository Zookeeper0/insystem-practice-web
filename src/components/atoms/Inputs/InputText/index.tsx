import { Control, Controller } from "react-hook-form";
import { InputProps, Inputs } from "..";
import { ChangeEvent } from "react";

interface InputTextProps extends InputProps {
  control?: Control<any>;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  type = "text",
  size = "md",
  direction = "column",
  id,
  label,
  placeholder,
  width,
  name,
  disabled,
  control,
  defaultValue,
  onChange,
  register,
}: InputTextProps) => {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, formState }) => (
          <Inputs
            id={id}
            label={label}
            size={size}
            width={width}
            direction={direction}
            errored={!!formState.errors[name]}
            erroredTxt={formState.errors[name]?.message}
          >
            <input
              id={id}
              placeholder={placeholder}
              type={type}
              onChange={field.onChange}
              disabled={disabled}
            />
          </Inputs>
        )}
      />
    );
  }

  return (
    <Inputs
      id={id && id}
      label={label && label}
      size={size}
      width={width}
      direction={direction}
    >
      <input
        name={name}
        id={id && id}
        placeholder={placeholder && placeholder}
        type={type}
        disabled={disabled}
        onChange={onChange}
        {...register}
      />
    </Inputs>
  );
};
