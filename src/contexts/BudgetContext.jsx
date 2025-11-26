import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetContextProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetContextProvider, useBudget };
