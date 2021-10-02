import React from 'react';
import { Input } from './styles';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({value, onChange}) => {
  
  const [displayValue, setDisplayValue] = useState(value)
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
        setTimeout(() =>onChange(event.target.value), 2000)
  };

  console.log(onChange)
  
  return (
    <>
      <Input
        value={displayValue}
        placeholder="Pesquise aqui"
        type="text"
        onChange={handleSearch}
      />
    </>
  );
  };
  export default observer(SearchBox);