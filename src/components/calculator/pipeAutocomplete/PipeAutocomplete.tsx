import { Autocomplete, TextField } from "@mui/material";
import { getPipes, ListType } from "../util.ts";
import { FieldRenderProps, useForm } from "react-final-form";

const PipeAutocomplete = ({ input }: FieldRenderProps<ListType>) => {
  const form = useForm();
  const pipeOptions = getPipes();

  return (
    <Autocomplete
      options={pipeOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'Pipe'} />}
      onChange={(_event, value) => form.change(input.name, value)}
    />
  )
}

export default PipeAutocomplete;
