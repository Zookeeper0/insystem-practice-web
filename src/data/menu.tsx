import { ReactComponent as IconMenu01 } from "../styles/assets/svg/icon_menu_01.svg";
import { ReactComponent as IconMenu02 } from "../styles/assets/svg/icon_menu_02.svg";

const menuList = [
  {
    id: 1,
    title: "홈",
    icon: <IconMenu01 />,
    depth: 1,
    path: "/",
  },
  {
    id: 2,
    title: "게시글 관리",
    icon: <IconMenu02 />,
    depth: 1,
    submenu: [{ id: 1, title: "등록", depth: 2, path: "/main" }],
  },
];

export default menuList;
