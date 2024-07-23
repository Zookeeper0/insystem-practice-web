import styled from "styled-components";

interface ContentProps {
  sideWidth?: number;
}

export const ContentTemplate = styled.div<ContentProps>`
  display: grid;
  gap: 25px;
  grid-template-columns: ${(props) =>
    props.sideWidth ? "auto " + props.sideWidth + "px" : "100%"};
`;
