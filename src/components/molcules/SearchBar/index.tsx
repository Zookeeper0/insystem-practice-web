import React, { FormEvent } from "react";
import { ReactComponent as IconFind } from "../../../styles/assets/svg/icon_find.svg";
import { Buttons } from "../../atoms/Buttons";
import * as S from "./SearchBar.style";

export interface SearchProps {
  searchTitle?: string;
  searchTitleLegend?: React.ReactElement;
  searchInput?: React.ReactElement;
  titleButtons?: React.ReactElement;
  gridButtons?: React.ReactElement;
  onSearch?: (e: FormEvent<HTMLFormElement>) => void;
}

export const SearchBar = ({
  searchTitle,
  searchTitleLegend,
  searchInput,
  titleButtons,
  gridButtons,
  onSearch,
}: SearchProps) => {
  return (
    <S.SearchBarBox>
      {searchTitle && (
        <S.SearchTitBox>
          <S.SearchTit>
            {searchTitle}

            {searchTitleLegend && searchTitleLegend}
          </S.SearchTit>
          {titleButtons && (
            <S.SearchTitButtons>{titleButtons}</S.SearchTitButtons>
          )}
        </S.SearchTitBox>
      )}
      {searchInput && (
        <S.SearchBarForm onSubmit={onSearch}>
          <S.SearchInputBox>
            {searchInput && (
              <>
                <S.SearchBarTit>조회조건</S.SearchBarTit>
                <S.SearchInput>
                  {searchInput}
                  <Buttons type="submit" size="md" layout="find">
                    <IconFind />
                  </Buttons>
                </S.SearchInput>
              </>
            )}
          </S.SearchInputBox>

          {gridButtons && (
            <S.SearchBarGridButtons>{gridButtons}</S.SearchBarGridButtons>
          )}
        </S.SearchBarForm>
      )}
    </S.SearchBarBox>
  );
};
