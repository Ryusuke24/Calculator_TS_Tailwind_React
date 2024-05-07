import { create } from "zustand";

const isFractional = (num: number): boolean => {
  if (num % 1 === 0) {
    return false;
  } else {
    return true;
  }
};

interface ResultState {
  result: string | number | null;
  clearResult: () => void;
  calculateResult: () => void;
  expression: string;
  addSymbol: (symbol: string) => void;
  deleteSymbol: () => void;
  clearExpression: () => void;
}

export const useResultStore = create<ResultState>(set => ({
  result: null,
  clearResult: () => set({ result: null }),
  calculateResult: () =>
    set(state => {
      let calculatedResult;
      if (state.expression === "") {
        calculatedResult = state.result;
      } else {
        if (state.result !== null) {
          const resultWithoutSpace = state.result.toString().slice(1);
          calculatedResult = eval(resultWithoutSpace + " " + state.expression);
        } else {
          calculatedResult = eval(state.expression);
        }

        console.log(calculatedResult);
        calculatedResult = "=" + calculatedResult;
        calculatedResult = calculatedResult.replace(/\.0+$/i, "");
        if (calculatedResult.length > 15) {
          calculatedResult = calculatedResult.slice(0, 15);
        }
      }

      return { result: calculatedResult };
    }),
  expression: "",
  addSymbol: (symbol: string) =>
    set(state => ({ expression: state.expression + symbol })),
  deleteSymbol: () =>
    set(state => {
      const expressionWithoutDeleteSymbol = state.expression.slice(0, -1);
      return { expression: expressionWithoutDeleteSymbol };
    }),
  clearExpression: () => set({ expression: "" }),
}));
