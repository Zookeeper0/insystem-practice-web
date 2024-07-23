import { InputProps, Inputs } from "..";
import * as S from "./InputSelect.style";

interface InputSelectProps extends InputProps {
  ref?: React.LegacyRef<HTMLSelectElement>;
  onChange?: (e: any) => void;
}

export const InputSelect = ({
  id,
  ref,
  label,
  size,
  width,
  direction,
  errored,
  erroredTxt,
  name,
  placeholder,
  options,
  onChange,
}: InputSelectProps) => {
  return (
    <Inputs
      id={id}
      label={label}
      size={size}
      width={width}
      direction={direction}
      errored={errored}
      erroredTxt={erroredTxt}
    >
      <S.SelectBox>
        <S.Select ref={ref} name={name} onChange={onChange}>
          <S.Placeholder value="" disabled selected>
            {placeholder}
          </S.Placeholder>
          {options &&
            options.map((item: any) => {
              return <option value={item.value}>{item.label}</option>;
            })}
        </S.Select>
      </S.SelectBox>
    </Inputs>
  );
};
