import ListAutocomplete from "./listAutocomplete/ListAutocomplete.tsx";
import PipeAutocomplete from "./pipeAutocomplete/PipeAutocomplete.tsx";
import FrameAutocomplete from "./frameAutocomplete/FrameAutocomplete.tsx";
import { Field, Form } from "react-final-form";
import { Button } from "@mui/material";
import { reqiered } from "./validate.ts";

const Calculator = () => {

  return (
    <Form
      onSubmit={(values) => {console.log('submitValues ->> ', values);}}
      render={({ handleSubmit, submitting, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Field name={'list'} component={ListAutocomplete} validate={reqiered}/>
          <Field name={'pipe'} component={PipeAutocomplete} validate={reqiered}/>

          <Field name={'frame'} component={FrameAutocomplete} validate={reqiered}/>

          <Button variant={'contained'} type={'submit'} disabled={invalid || submitting}>Calculate</Button>
        </form>
      )}
    />
  )
}

export default Calculator;
