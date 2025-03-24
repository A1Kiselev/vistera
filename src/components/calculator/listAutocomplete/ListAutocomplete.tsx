import { Autocomplete, TextField } from "@mui/material";

import { getLists, ListType } from "../util.ts";
import { FieldRenderProps, useForm } from "react-final-form";

const ListAutocomplete = ({ input }: FieldRenderProps<ListType>) => {
  const form = useForm();
  const listOptions = getLists();

  return (
    <Autocomplete
      options={listOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'List'} />}
      onChange={(_event, value) => form.change(input.name, value)}
    />
  )
}

export default ListAutocomplete;
