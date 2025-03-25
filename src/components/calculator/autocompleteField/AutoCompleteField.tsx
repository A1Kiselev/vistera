import { FrameType, getOptionsByType, ListType, OptionsType, PipeType } from "../util.ts";
import { Autocomplete, styled, TextField } from "@mui/material";
import { FieldRenderProps, useForm } from "react-final-form";

const CapitalizedTextField = styled(TextField)({
  textTransform: 'capitalize',
})

const AutoCompleteField = ({
  type, props
}: {
  type: OptionsType,
  props: FieldRenderProps<FrameType | PipeType | ListType>
}) => {
  const form = useForm();
  const { input } = props;
  const options = getOptionsByType(type);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <CapitalizedTextField {...params} label={type} margin={'dense'} />}
      onChange={(_event, value) => form.change(input.name, value)}
      fullWidth
    />
  )
}

export default AutoCompleteField;
