import * as S from "./PageContent.style";
import { ReactComponent as IconArrow } from "../../../../styles/assets/svg/icon_title_arrow.svg";

interface PageContentProps {
  depth01Title: string;
  depth02Title?: string;
  depth03Title?: string;
  children: React.ReactElement;
}

export const PageContent = ({
  depth01Title,
  depth02Title,
  depth03Title,
  children,
}: PageContentProps) => {
  return (
    <S.PageContent>
      <S.PageTitBox>
        {depth01Title}
        {depth02Title && (
          <>
            <IconArrow />
            {depth02Title}
          </>
        )}
        {depth03Title && (
          <>
            <IconArrow />
            {depth03Title}
          </>
        )}
      </S.PageTitBox>

      <S.PageContentBox>{children}</S.PageContentBox>
    </S.PageContent>
  );
};
