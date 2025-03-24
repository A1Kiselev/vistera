import { Autocomplete, TextField } from "@mui/material";
import { getFrames, ListType } from "../util.ts";
import { FieldRenderProps, useForm } from "react-final-form";

const FrameAutocomplete = ({ input }: FieldRenderProps<ListType>) => {
  const form = useForm();
  const frameOptions = getFrames();

  return (
    <Autocomplete
      options={frameOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'Frame'} />}
      onChange={(_event, value) => form.change(input.name, value)}
    />
  )
}

export default FrameAutocomplete;
