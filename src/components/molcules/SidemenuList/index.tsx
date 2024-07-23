import { SidemenuItem } from "../../atoms/SidemenuItem";
import * as S from "./SidemenuList.style";

interface SidemenuListProps {
  menuList: any;
  depth?: number;
}

export const SidemenuList = ({ menuList, depth }: SidemenuListProps) => {
  return (
    <S.SidemenuListBox depth={depth ? depth : 1}>
      {menuList.map((item: any) => {
        return <SidemenuItem data={item} key={item.id} />;
      })}
    </S.SidemenuListBox>
  );
};
