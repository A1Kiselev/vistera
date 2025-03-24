import { Autocomplete, TextField } from "@mui/material";
import { getLists } from "../util.ts";

const ListAutocomplete = () => {
  const listOptions = getLists();

  return (
    <Autocomplete
      options={listOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'List'} />}
      onChange={() => {}}     // add function to remember chosen list
    />
  )
}

export default ListAutocomplete;
