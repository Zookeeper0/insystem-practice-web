import { useMemo, useRef, useState } from "react";
import {
  ColDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Pagignation } from "../../containers/Grid/Pagination";
import * as S from "./Grid.style";

interface GridProps {
  gridTitle?: string;
  width?: number;
  height?: any;
  defaultPageSize?: number;
  paging?: boolean;
  pagingShow?: boolean;
  rowData?: any[];
  columnDefs?: ColDef[];
  rowSelection?: "single" | "multiple";
}

const defaultColDef: ColDef = {
  cellStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headerClass: "custom-header",
};

export const Grid = ({
  gridTitle,
  width,
  height,
  defaultPageSize = 10,
  paging = true,
  pagingShow = true,
  rowData,
  columnDefs,
  rowSelection,
}: GridProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const autoSizeStrategy = useMemo<
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
  >(() => {
    return {
      type: "fitGridWidth",
      defaultMinWidth: 40,
    };
  }, []);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value, 10);
    if (gridRef.current && gridRef.current.api) {
      setPageSize(newSize);
    }
  };

  return (
    <S.GridBox pagingShow={pagingShow} height={height}>
      {gridTitle && <S.GridTit>{gridTitle}</S.GridTit>}
      <div className="ag-theme-quartz">
        <S.Grid height={height}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={paging}
            suppressPaginationPanel={paging}
            paginationPageSize={pageSize}
            rowSelection={rowSelection}
            defaultColDef={defaultColDef}
            autoSizeStrategy={autoSizeStrategy}
          />
        </S.Grid>
      </div>
      {paging && (
        <Pagignation
          gridRef={gridRef}
          total={rowData?.length ?? 0}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </S.GridBox>
  );
};
