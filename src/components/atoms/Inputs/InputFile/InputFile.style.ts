import styled, { css } from "styled-components";
import { InputProps } from "..";

interface InputFileStyleProps {
  placeholder?: boolean;
}

export const InputFileLabel = styled.label<InputProps>`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.black12};
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  input {
    display: none;
  }

  // SIZE
  ${(props) =>
    props.size === "md" &&
    css`
      height: 32px;
      padding: 0 10px;
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      height: 48px;
      padding: 0 16px;
      font-size: 1.4rem;
    `}
`;

export const InputFilePlaceholder = styled.div<InputFileStyleProps>`
  color: ${(props) => props.theme.colors.black80};

  ${(props) =>
    props.placeholder &&
    css`
      color: ${(props) => props.theme.colors.black38};
    `};
`;
