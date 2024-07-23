import { InputProps, Inputs } from "..";
import * as S from "./InputDate.style";

export const InputDate = (props: InputProps) => {
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
      <S.InputDateBox>
        <input type="date" placeholder={props.placeholder} />
        {props.endDate && (
          <>
            ~
            <input type="date" />
          </>
        )}
      </S.InputDateBox>
    </Inputs>
  );
};
