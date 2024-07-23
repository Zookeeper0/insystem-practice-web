import { useState } from "react";
import { Buttons } from "../../Buttons";
import { InputProps } from "..";
import * as S from "./InputFileList.style";
import { ColDef } from "ag-grid-community";
import { Grid } from "../../../molcules/Grid";

export const InputFileList = (props: InputProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const columnDefs: ColDef[] = [
    {
      headerName: "선택",
      width: 80,
    },
    {
      headerName: "파일명",
      field: "name",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files || []));
  };

  console.log(files);

  return (
    <S.InputFileListBox width={props.width}>
      <S.InputFileListHeader>
        파일
        <S.InputFileListButtons>
          <Buttons
            type="button"
            size="sm"
            layout="destructive"
            label="선택삭제"
          />
          <S.InputFileListLabel htmlFor={props.id && props.id}>
            파일등록
            <input
              type="file"
              id={props.id && props.id}
              multiple
              onChange={handleChange}
            />
          </S.InputFileListLabel>
        </S.InputFileListButtons>
      </S.InputFileListHeader>

      <S.InputFileList>
        <Grid columnDefs={columnDefs} rowData={files} paging={false} />
      </S.InputFileList>

      {props.errored && (
        <S.InputFileListErroedTxt>
          파일을 등록해주세요.
        </S.InputFileListErroedTxt>
      )}
    </S.InputFileListBox>
  );
};
