import * as S from "./HeaderPopup.style";
import { ReactComponent as IconPassword } from "../../../styles/assets/svg/icon_password.svg";
import { HeaderPopupItem } from "../../atoms/HeaderPopupItem";

interface HeaderPopupProps {
  popupRef: React.ForwardedRef<HTMLDivElement>;
  popupOutsideClick: (e: any) => void;
  handleModal: (e: any) => void;
}

export const HeaderPopup = ({
  popupRef,
  popupOutsideClick,
  handleModal,
}: HeaderPopupProps) => {
  const popupItem = [
    {
      id: 1,
      title: "비밀번호 변경",
      icon: <IconPassword />,
      onClick: handleModal,
    },
  ];

  return (
    <S.HeaderPopupBg ref={popupRef} onClick={(e: any) => popupOutsideClick(e)}>
      <S.HeaderPopup>
        <S.HeaderPopupList>
          {popupItem.map((item: any) => {
            return (
              <HeaderPopupItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                onClick={item.onClick}
              />
            );
          })}
        </S.HeaderPopupList>
      </S.HeaderPopup>
    </S.HeaderPopupBg>
  );
};
