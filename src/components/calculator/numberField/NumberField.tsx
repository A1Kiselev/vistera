import { styled, TextField } from "@mui/material";
import { getSizeLimit, SizeType, SizeVariant } from "../util.ts";
import { FieldRenderProps } from "react-final-form";

const CapitalizedTextField = styled(TextField)({
  textTransform: 'capitalize',
})

const NumberField = ({
  variant, props
}: {
  variant: SizeVariant,
  props: FieldRenderProps<SizeType>
}) => {
  const { input } = props;
  const sizeLimit = getSizeLimit(variant);

  return (
    <CapitalizedTextField
      variant={'outlined'}
      label={variant}
      value={input.value}
      onChange={input.onChange}
      type={'number'}
      slotProps={{
        htmlInput: {
          min: sizeLimit.min,
          max: sizeLimit.max,
          step: sizeLimit.step,
        }
      }}
      sx={{
        maxWidth: 300,
      }}
      margin={'dense'}
    />
  )
}

export default NumberField
