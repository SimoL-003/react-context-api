import { useBudget } from "../../contexts/BudgetContext";

export default function BudgetFilter({ maxPrice }) {
  const { budgetMode, setBudgetMode, maxBudget, setMaxBudget } = useBudget();

  return (
    <section className="my-6 flex flex-col md:flex-row">
      {/* Budget mode button */}
      <button
        onClick={() => {
          setBudgetMode((prev) => !prev);
          setMaxBudget(maxPrice);
        }}
        className="button button--primary px-4 py-3 text-sm mr-8 w-fit"
      >
        {budgetMode ? "Turn off" : "Turn on"} budget mode
      </button>

      {/* Input range */}
      {budgetMode && (
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="text-lg font-medium">Set a budget</label>
          <input
            id="budget"
            type="range"
            min="0"
            max={Math.ceil(maxPrice)}
            step="5"
            value={maxBudget}
            onChange={(e) => setMaxBudget(e.target.value)}
            className="w-60 mx-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <span className="font-semibold">${Math.ceil(maxBudget)}</span>
        </div>
      )}
    </section>
  );
}
