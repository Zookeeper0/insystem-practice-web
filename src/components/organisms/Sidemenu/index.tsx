import menuList from "../../../data/menu";
import { SidemenuTop } from "../../atoms/SidemenuTop";
import { SidemenuList } from "../../molcules/SidemenuList";

import * as S from "./Sidemenu.style";

interface SidemenuProps {
  asideToggle?: any;
}

export const Sidemenu = ({ asideToggle }: SidemenuProps) => {
  return (
    <S.SidemenuSection>
      <SidemenuTop asideToggle={asideToggle} />
      <SidemenuList menuList={menuList} />
    </S.SidemenuSection>
  );
};
