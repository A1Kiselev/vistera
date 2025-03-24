import ListAutocomplete from "./listAutocomplete/ListAutocomplete.tsx";
import PipeAutocomplete from "./pipeAutocomplete/PipeAutocomplete.tsx";
import FrameAutocomplete from "./frameAutocomplete/FrameAutocomplete.tsx";

const Calculator = () => {

  return (
    <>
      <ListAutocomplete />
      <PipeAutocomplete />

      <FrameAutocomplete />
    </>
  )
}

export default Calculator;
