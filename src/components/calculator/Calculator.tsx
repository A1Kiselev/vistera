import { Field, Form } from "react-final-form";
import { Button, Paper, Stack } from "@mui/material";
import { required } from "./validate.ts";
import { OptionsType, SizeVariant } from "./util.ts";
import AutoCompleteField from "./autocompleteField/AutoCompleteField.tsx";
import NumberField from "./numberField/NumberField.tsx";
import { StaffContextType } from "../context/StaffContext.tsx";
import { Dispatch, SetStateAction } from "react";

const Calculator = ({ handleCalculate }: {handleCalculate: Dispatch<SetStateAction<StaffContextType | null>>}) => {

  return (
    <Paper elevation={5} sx={{ padding: 1, maxWidth: 700 }}>
      <Form
        onSubmit={(values) => handleCalculate(values as StaffContextType)}
        render={({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: 'wrap' }}
            >
              <Field name={'list'} validate={required}>
                {(props) => (
                  <AutoCompleteField type={OptionsType.List} props={props} />
                )}
              </Field>
              <Field name={'pipe'} validate={required}>
                {(props) => (
                  <AutoCompleteField type={OptionsType.Pipe} props={props} />
                )}
              </Field>
              <Field name={'frame'} validate={required}>
                {(props) => (
                  <AutoCompleteField type={OptionsType.Frame} props={props} />
                )}
              </Field>
              <Field name={'material'} validate={required}>
                {(props) => (
                  <AutoCompleteField type={OptionsType.Material} props={props} />
                )}
              </Field>

              <Field name={'width'} value={required}>
                {(props) => (
                  <NumberField variant={SizeVariant.Width} props={props} />
                )}
              </Field>
              <Field name={'length'} validate={required}>
                {(props) => (
                  <NumberField variant={SizeVariant.Length} props={props} />
                )}
              </Field>
            </Stack>

            <Stack direction={'row-reverse'}>
              <Button
                variant={'contained'}
                type={'submit'}
                disabled={invalid || submitting}
              >
                Calculate
              </Button>
            </Stack>
          </form>
        )}
      />
    </Paper>
  )
}

export default Calculator;
