import * as S from "./SidemenuTop.style";
import { ReactComponent as IconMenu } from "../../../styles/assets/svg/icon_sidemenu.svg";

interface SidemenuTopProps {
  asideToggle?: any;
}

export const SidemenuTop = ({ asideToggle }: SidemenuTopProps) => {
  return (
    <S.SidemenuTop>
      <S.SidemenuBtn type="button" onClick={asideToggle}>
        <IconMenu />
      </S.SidemenuBtn>
      <S.SidemenuTopSpan>(주) 인시스템 </S.SidemenuTopSpan>
    </S.SidemenuTop>
  );
};
