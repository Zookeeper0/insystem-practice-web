import React from "react";
import { InputText } from "../../atoms/Inputs/InputText";
import { Buttons } from "../../atoms/Buttons";
import * as S from "./formbox.style";
const FormBox = () => {
  return (
    <div>
      <InputText name="name" label="이름" />
      <InputText name="name" label="성별" />
      <InputText name="name" label="나이" />
      <InputText name="name" label="전화번호" />
      <InputText name="name" label="주소" />
      <InputText name="name" label="메일주소" />
      <S.FormButtonWrapper>
        <Buttons type="button" size="lg" layout="primary" label="저장" />
      </S.FormButtonWrapper>
    </div>
  );
};

export default FormBox;
