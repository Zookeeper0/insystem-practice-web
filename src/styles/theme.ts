import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  shadows: {
    popup: "0px 2px 10px 0px rgba(0,0,0,0.1)",
    modal: "0px 8px 24px 0px rgba(0,0,0,.14)",
    field: "0px 6px 16px 0px rgba(0,0,0,.06)",
  },

  colors: {
    // Colors
    primary100: "#4B45E7",
    primary60: "#4B45E799",
    primary50: "#4B45E780",
    primary10: "#4B45E719",
    primary6: "#4B45E70f",
    primary5: "#4B45E70d",
    primaryHover: "#3C36D4",

    // Basic
    white100: "#ffffff",
    white60: "#ffffff99",
    white38: "#ffffff61",
    white12: "#ffffff1f",
    black100: "#000000",
    black90: "#000000e6",
    black80: "#000000cc",
    black70: "#000000b3",
    black60: "#00000099",
    black38: "#00000061",
    black30: "#0000004C",
    black12: "#0000001f",
    black10: "#00000019",
    black5: "#0000000d",
    black4: "#00000004",
    black2: "#00000005",
    gray100: "#E6E6E6",

    // Status
    greenStatus: "#00C572",
    yellowStatus: "#FFBC11",
    redStatus: "#FF4D58",
    redStatus5: "#FF4D580d",
    blueStatus: "#0098FF",
    grayStatus: "#00000061",

    // Component
    labelBox: "#4B4B4B",
    scrollTrack: "#1A1A1A",
    authBackground: "#0011664C",
  },
};
