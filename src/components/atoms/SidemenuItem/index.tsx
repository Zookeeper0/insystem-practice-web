import * as S from "./SidemenuItem.style";
import { ReactComponent as IconArrow } from "../../../styles/assets/svg/icon_sidemenu_arrow.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidemenuList } from "../../molcules/SidemenuList";

interface SidemenuItemProps {
  data: any;
}

export const SidemenuItem = ({ data }: SidemenuItemProps) => {
  const [submenu, setSubmenu] = useState(false);
  const location = useLocation();

  const submenuToggle = () => {
    setSubmenu(!submenu);
  };

  return (
    <S.SidemenuItemBox
      submenuToggle={submenu}
      menuActive={location.pathname === data.path ? true : false}
    >
      {data.submenu ? (
        <>
          <S.SidemenuListItem
            depth={data.depth}
            onClick={data.submenu && submenuToggle}
          >
            <S.SidemenuItemTit>
              {data.depth === 1 && data.icon}
              {data.depth !== 1 && "- "}
              <S.TitBox>{data.title}</S.TitBox>
            </S.SidemenuItemTit>
            {data.submenu && <IconArrow />}
          </S.SidemenuListItem>
          <SidemenuList depth={data.depth + 1} menuList={data.submenu} />
        </>
      ) : (
        <Link to={`${data.path}`}>
          <S.SidemenuListItem depth={data.depth}>
            <S.SidemenuItemTit>
              {data.depth === 1 && data.icon}
              {data.depth !== 1 && "- "}
              <S.TitBox>{data.title}</S.TitBox>
            </S.SidemenuItemTit>
            {data.submenu && <IconArrow />}
          </S.SidemenuListItem>
        </Link>
      )}
    </S.SidemenuItemBox>
  );
};
