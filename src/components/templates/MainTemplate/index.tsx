import { useState } from "react";
import { Header } from "../../organisms/Header";
import * as S from "./MainTemplate.style";
import { Sidemenu } from "../../organisms/Sidemenu";

interface MainTemplateProps {
  children: React.ReactElement;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  const [asideOpen, setAsideOpen] = useState(true);

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <S.MainTemplate asideOpen={asideOpen}>
      <Header asideToggle={handleAsideOpen} asideOpen={asideOpen} />
      <Sidemenu asideToggle={handleAsideOpen} />
      <S.ContentSection>{children}</S.ContentSection>
    </S.MainTemplate>
  );
};
