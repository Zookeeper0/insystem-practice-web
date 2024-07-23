import * as S from "./ContentTemplate.style";

interface ContentProps {
  sideWidth?: number;
  children?: React.ReactElement;
}

export const ContentTemplate = ({ sideWidth, children }: ContentProps) => {
  return (
    <S.ContentTemplate sideWidth={sideWidth}>{children}</S.ContentTemplate>
  );
};
