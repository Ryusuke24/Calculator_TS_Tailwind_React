import { ReactElement } from "react";
import { Screen } from "../Screen/Screen";
import { Buttons } from "./Buttons/Buttons";

export const Calculator = (): ReactElement => {
  return (
    <div className="bg-slate-950 h-5/6 w-1/3 min-w-96 rounded-3xl p-10 pb-16">
      <Screen />
      <Buttons />
    </div>
  );
};
