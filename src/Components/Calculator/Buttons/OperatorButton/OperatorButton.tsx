import { useResultStore } from "../../../../Store";

interface TextProp {
  operator: string;
}

export const OperatorButton = ({ operator }: TextProp) => {
  const addSymbol = useResultStore(state => state.addSymbol);
  const calculateResult = useResultStore(state => state.calculateResult);
  const clearExpression = useResultStore(state => state.clearExpression);

  return (
    <button
      className="bg-blue-500 rounded-2xl text-white flex justify-center items-center h-full w-full active:bg-blue-700 transition-colors text-3xl"
      onClick={() => {
        if (operator === "=") {
          calculateResult();
          clearExpression();
        } else if (operator === "PI") {
          addSymbol("3.14");
        } else if (operator === "^") {
          addSymbol("**");
        } else {
          addSymbol(operator);
        }
      }}
    >
      {operator}
    </button>
  );
};
