import { InputProps, Inputs } from "..";
import * as S from "./InputTextarea.style";

export const InputTextarea = (props: InputProps) => {
  return (
    <Inputs
      id={props.id && props.id}
      label={props.label && props.label}
      size={props.size}
      width={props.width}
      direction={props.direction}
      errored={props.errored}
      erroredTxt={props.erroredTxt}
    >
      <S.Textarea
        id={props.id && props.id}
        size={props.size}
        height={props.height}
        placeholder={props.placeholder && props.placeholder}
        disabled={props.disabled}
      />
    </Inputs>
  );
};
