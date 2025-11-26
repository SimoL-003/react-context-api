import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetContextProvider({}) {
  const [budget, setBudget] = useState(false);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetContextProvider, useBudget };
