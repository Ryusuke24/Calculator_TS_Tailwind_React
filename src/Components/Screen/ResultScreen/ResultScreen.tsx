import { useResultStore } from "../../../Store";

export const ResultScreen = () => {
  const result = useResultStore(state => state.result);

  return (
    <>
      {result === null ? (
        ""
      ) : (
        <p className="text-white text-6xl mt-10 animate-slideBottom">
          {result}
        </p>
      )}
    </>
  );
};
