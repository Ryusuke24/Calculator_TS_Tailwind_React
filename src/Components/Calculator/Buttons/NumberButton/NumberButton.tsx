import { useResultStore } from "../../../../Store";

interface TextProp {
  numberProp: string;
}

export const NumberButton = ({ numberProp }: TextProp) => {
  const addSymbol = useResultStore(state => state.addSymbol);
  return (
    <button
      className="bg-gray-700 rounded-2xl  flex justify-center items-center h-full w-full active:bg-gray-800 transition-colors text-4xl text-blue-500"
      onClick={() => addSymbol(numberProp)}
    >
      {numberProp}
    </button>
  );
};
