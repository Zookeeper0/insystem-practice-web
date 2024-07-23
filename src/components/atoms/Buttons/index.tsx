import * as S from "./buttons.style";

interface ButtonsProps {
  type: "reset" | "submit" | "button" | undefined;
  size: "sm" | "md" | "lg";
  layout: "primary" | "secondary" | "destructive" | "ghost" | "icon" | "find";
  label?: string;
  form?: string;
  onClick?: any;
  children?: React.ReactElement;
  icon?: React.ReactElement;
}

export const Buttons = (props: ButtonsProps) => {
  return (
    <S.Buttons
      type={props.type}
      size={props.size}
      layout={props.layout}
      onClick={props.onClick}
      form={props.form && props.form}
    >
      {props.icon && props.icon}
      {props.label}
      {props.children}
    </S.Buttons>
  );
};
