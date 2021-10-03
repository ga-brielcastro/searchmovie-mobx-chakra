import { Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

interface ISearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
    setTimeout(() => onChange(event.target.value), 2000);
  };

  console.log(displayValue);

  return (
    <>
      <Input
        value={displayValue}
        onChange={handleSearch}
        variant="filled"
        placeholder="Pesquise o filme aqui"
      />
    </>
  );
};

export default observer(SearchBox);
