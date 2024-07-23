import styled, { css } from "styled-components";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  layout: "primary" | "secondary" | "destructive" | "ghost" | "icon" | "find";
}

export const Buttons = styled.button<ButtonProps>`
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  // SIZE
  ${(props) =>
    props.size === "sm" &&
    css`
      height: 28px;
      padding: 0 10px;
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      height: 32px;
      padding: 0 16px;
      font-size: 1.4rem;
      font-weight: 500;
      flex-grow: 0;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      width: 100%;
      height: 48px;
      font-size: 1.6rem;
      font-weight: 600;
    `}

// LAYOUT
${(props) =>
    props.layout === "primary" &&
    css`
      color: ${(props) => props.theme.colors.white100};
      border: none;
      background: ${(props) => props.theme.colors.primary100};

      &:hover {
        background: ${(props) => props.theme.colors.primaryHover};
      }
    `}

${(props) =>
    props.layout === "secondary" &&
    css`
      color: ${(props) => props.theme.colors.white100};
      border: none;
      background: ${(props) => props.theme.colors.black60};

      &:hover {
        background: ${(props) => props.theme.colors.black70};
      }
    `}

${(props) =>
    props.layout === "destructive" &&
    css`
      color: ${(props) => props.theme.colors.redStatus};
      border: 1px solid ${(props) => props.theme.colors.redStatus};
      background: ${(props) => props.theme.colors.white100};

      &:hover {
        background: ${(props) => props.theme.colors.redStatus5};
      }
    `}

${(props) =>
    props.layout === "ghost" &&
    css`
      color: ${(props) => props.theme.colors.primary100};
      border: 1px solid ${(props) => props.theme.colors.primary100};
      background: ${(props) => props.theme.colors.white100};

      &:hover {
        background: ${(props) => props.theme.colors.primary5};
      }
    `}

${(props) =>
    props.layout === "find" &&
    css`
      display: flex;
      width: 32px;
      border: none;
      padding: 0 !important;
      background: ${(props) => props.theme.colors.black60};
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${(props) => props.theme.colors.black80};
      }
    `}

${(props) =>
    props.layout === "icon" &&
    css`
      padding: 0 6px;
      border: none;
      background: none;

      &:hover {
        background: ${(props) => props.theme.colors.black5};

        svg {
          path {
            fill: ${(props) => props.theme.colors.primary100};
            fill-opacity: 1;
          }
        }
      }
    `}
`;
