import Calculator from "./components/calculator/Calculator.tsx";
import ResultTable from "./components/resultTable/ResultTable.tsx";
import { useState } from "react";
import StaffContext, { StaffContextType } from "./components/context/StaffContext.tsx";

function App() {
  const [currentStaff, setCurrentStaff] = useState<StaffContextType | null>(null)

  return (
    <StaffContext.Provider value={currentStaff}>
      <Calculator handleCalculate={setCurrentStaff}/>
      <ResultTable />
    </StaffContext.Provider>
  )
}

export default App
