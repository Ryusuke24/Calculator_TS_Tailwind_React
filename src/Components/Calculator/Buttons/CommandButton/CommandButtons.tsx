import { useResultStore } from "../../../../Store";
import DeleteButton from "./DeleteButton.svg";

interface TextProp {
  command: string;
  isImage?: boolean;
}

export const CommandButton = ({ command, isImage }: TextProp) => {
  const clearResult = useResultStore(state => state.clearResult);
  const clearExpression = useResultStore(state => state.clearExpression);
  const deleteSymbol = useResultStore(state => state.deleteSymbol);
  return (
    <button
      className="bg-gray-500 rounded-2xl text-white flex justify-center items-center active:bg-gray-600 transition-colors"
      onClick={
        command === ""
          ? () => deleteSymbol()
          : () => {
              clearResult();
              clearExpression();
            }
      }
    >
      {isImage ? (
        <img src={DeleteButton} alt="DeleteButton"></img>
      ) : (
        <p className="text-3xl">{command}</p>
      )}
    </button>
  );
};
