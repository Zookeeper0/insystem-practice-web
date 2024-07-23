import { useEffect, useRef, useState } from "react";
import { ReactComponent as IconAlarm } from "../../../styles/assets/svg/icon_alarm.svg";
import { ReactComponent as IconMenu } from "../../../styles/assets/svg/icon_sidemenu.svg";
import { ReactComponent as IconUser } from "../../../styles/assets/svg/icon_user.svg";
import { Buttons } from "../../atoms/Buttons";
import * as S from "./Header.style";
import { HeaderPopup } from "../../molcules/HeaderPopup";

interface HeaderProps {
  asideToggle?: any;
  asideOpen?: boolean;
}

export const Header = ({ asideOpen, asideToggle }: HeaderProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupShow, setPopupShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const popupOutsideClick = (e: any) => {
    if (popupRef.current === e.target) {
      setPopupShow(false);
    }
  };

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <>
      <S.HeaderSection>
        <S.ShipModelTit>
          {asideOpen === true ? (
            ""
          ) : innerWidth < 1400 ? (
            <S.HeaderSidemenuBtn type="button" onClick={asideToggle}>
              <IconMenu />
            </S.HeaderSidemenuBtn>
          ) : (
            ""
          )}
          인시스템 게시판 테스트
        </S.ShipModelTit>
        <S.HeaderBtnBox>
          <Buttons type="button" size="md" layout="icon" icon={<IconAlarm />} />
          <Buttons
            type="button"
            size="md"
            layout="icon"
            icon={<IconUser />}
            onClick={() => {
              setPopupShow(!popupShow);
            }}
          />
        </S.HeaderBtnBox>
      </S.HeaderSection>
      {popupShow && (
        <HeaderPopup
          popupRef={popupRef}
          popupOutsideClick={popupOutsideClick}
          handleModal={() => {
            setPopupShow(false);
            setModalShow(!modalShow);
          }}
        />
      )}
    </>
  );
};
