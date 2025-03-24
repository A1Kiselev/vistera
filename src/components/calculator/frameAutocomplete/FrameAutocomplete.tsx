import { Autocomplete, TextField } from "@mui/material";
import { getFrames } from "../util.ts";

const FrameAutocomplete = () => {
  const frameOptions = getFrames();

  return (
    <Autocomplete
      options={frameOptions}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={'Frame'} />}
      onChange={() => {}}     // add function to remember chosen frame
    />
  )
}

export default FrameAutocomplete;
