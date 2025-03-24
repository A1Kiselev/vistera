import { Autocomplete, TextField } from "@mui/material";
import { getPipes } from "../util.ts";

const PipeAutocomplete = () => {
  const pipeOptions = getPipes();

  return (
    <Autocomplete
      options={pipeOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'Pipe'} />}
      onChange={() => {}}     // add function to remember chosen pipe
    />
  )
}

export default PipeAutocomplete;
