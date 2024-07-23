import styled from "styled-components";
import { Grid } from "../../../molcules/Grid/Grid.style";

interface InputFileStyleProps {
  width?: number;
}

export const InputFileListBox = styled.div<InputFileStyleProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  flex-direction: column;
  gap: 4px;
`;

export const InputFileListHeader = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.black60};
  font-size: 1.2rem;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
`;

export const InputFileListButtons = styled.div`
  display: flex;
  gap: 4px;
`;

export const InputFileListLabel = styled.label`
  display: flex;
  height: 28px;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.primary100};
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.primary100};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  input {
    display: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary5};
  }
`;

export const InputFileList = styled.div`
  & > div {
    max-height: 30vh;
  }

  ${Grid} {
    .dx-datagrid {
      .dx-datagrid-headers {
        td {
          height: 30px;
          padding: 0;

          .dx-datagrid-text-content {
            line-height: 30px;
          }
        }
      }

      .dx-datagrid-rowsview .dx-row.dx-data-row td {
        height: 30px;
        padding: 0;
      }
    }
  }
`;

export const InputFileListErroedTxt = styled.p`
  color: ${(props) => props.theme.colors.redStatus};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;
