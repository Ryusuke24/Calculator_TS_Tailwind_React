import { useResultStore } from "../../../Store";

export const ExpressionScreen = () => {
  const expression = useResultStore(state => state.expression);
  return (
    <>
      <p className="text-gray-500 text-4xl ">
        {expression.length < 28
          ? expression
          : "Невозможно отобразть данное количество знаков"}
      </p>
    </>
  );
};
