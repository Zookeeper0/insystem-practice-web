import React from "react";
import { PageContent } from "../../components/organisms/Contents/PageContent";
import { ColDef } from "ag-grid-community";

import { sensorData } from "../../data/dummy";
import { Grid } from "../../components/molcules/Grid";
import { ContentTemplate } from "../../components/templates/ContentTemplate/ContentTemplate.style";
import FormBox from "../../components/molcules/FormBox";
import * as S from "../page.styles";

const MainPage = () => {
  const columnDefs: ColDef[] = [
    {
      headerName: "이름",
      field: "ship01",
      width: 80,
    },
    {
      headerName: "나이",
      field: "ship02",
      width: 80,
    },
    {
      headerName: "전화번호",
      field: "equip",
      width: 100,
    },
    {
      headerName: "메일주소",
      field: "sensor",
      width: 90,
    },
    {
      headerName: "주소",
      field: "type",
    },
  ];
  return (
    <PageContent depth01Title="게시글 관리" depth02Title="글 등록">
      <ContentTemplate sideWidth={480}>
        <S.PageGrid>
          <Grid rowData={[]} columnDefs={columnDefs} />
        </S.PageGrid>
        <FormBox />
      </ContentTemplate>
    </PageContent>
  );
};

export default MainPage;
