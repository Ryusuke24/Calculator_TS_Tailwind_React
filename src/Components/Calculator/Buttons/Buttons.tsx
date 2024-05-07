import { CommandButton } from "./CommandButton/CommandButtons";
import { NumberButton } from "./NumberButton/NumberButton";
import { OperatorButton } from "./OperatorButton/OperatorButton";

export const Buttons = () => {
  return (
    <div className=" h-3/5 grid grid-cols-4 grid-rows-5 gap-4 p-2 select-none">
      <OperatorButton operator={"("} />
      <OperatorButton operator={")"} />
      <OperatorButton operator={"^"} />
      <OperatorButton operator={"PI"} />
      <CommandButton command={"Ac"} />
      <CommandButton command={""} isImage={true} />
      <OperatorButton operator={"/"} />
      <OperatorButton operator={"*"} />
      <NumberButton numberProp={"7"} />
      <NumberButton numberProp={"8"} />
      <NumberButton numberProp={"9"} />
      <OperatorButton operator={"-"} />
      <NumberButton numberProp={"4"} />
      <NumberButton numberProp={"5"} />
      <NumberButton numberProp={"6"} />
      <OperatorButton operator={"+"} />
      <NumberButton numberProp={"1"} />
      <NumberButton numberProp={"2"} />
      <NumberButton numberProp={"3"} />
      <div className="row-span-2 h-full">
        <OperatorButton operator={"="} />
      </div>
      <div className="col-span-2">
        <NumberButton numberProp={"0"} />
      </div>

      <NumberButton numberProp={"."} />
    </div>
  );
};
