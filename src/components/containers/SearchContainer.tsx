import React, { ChangeEvent, FormEvent, useState } from "react";
import { SearchBar } from "../molcules/SearchBar";

interface SearchConainerProps {
  components: React.ReactElement[];
  searchTitle?: string;
  titleButtons?: React.ReactElement;
  gridButtons?: React.ReactElement;
  onSearch: (search: any) => void;
}

export const SearchConainer = ({
  components,
  searchTitle,
  titleButtons,
  gridButtons,
  onSearch,
}: SearchConainerProps) => {
  const [formValues, setFormValues]: any = useState({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    userOnChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (userOnChange) {
      userOnChange(e);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(formValues);
  };

  const searchInput = (
    <>
      {components.map((Component, index) => (
        <div key={index}>
          {React.cloneElement(Component, {
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
              handleChange(e, Component.props.onChange),
            value: formValues[Component.props.name] || "",
          })}
        </div>
      ))}
    </>
  );

  return (
    <SearchBar
      searchInput={searchInput}
      searchTitle={searchTitle}
      titleButtons={titleButtons}
      gridButtons={gridButtons}
      onSearch={handleSearch}
    />
  );
};
