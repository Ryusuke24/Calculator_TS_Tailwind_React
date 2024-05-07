import { ExpressionScreen } from "./ExpressionScreen/ExpressionScreen";
import { ResultScreen } from "./ResultScreen/ResultScreen";

export const Screen = () => {
  return (
    <div className="h-2/5 mb-5 flex flex-col items-end justify-center p-5">
      <ExpressionScreen />
      <ResultScreen />
    </div>
  );
};
