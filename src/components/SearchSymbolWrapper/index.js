import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SearchSymbolWrapper = ({
  options,
  selected,
  setSelected,
}) => {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      filterSelectedOptions
      inputValue={inputValue}
      onInputChange={(e, value, reason) => reason !== 'reset' ? setInputValue(value) : () => {}}
      onChange={(e, value) => {setSelected([...selected, value]); setInputValue('')}}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="dense"
          id="fname"
          label="Add asset"
          type="text"
          fullWidth
          size={"small"}
          variant="outlined"
        />
      )}
    />
  );
}

export default SearchSymbolWrapper