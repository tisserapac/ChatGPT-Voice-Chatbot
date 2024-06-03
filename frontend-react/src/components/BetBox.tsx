import React from "react";
import BetButton from "./BetButton";

type Props = {
  betDirection: string;
  setBetDirection: any;
};

function BetBox({ betDirection, setBetDirection }: Props) {
  return (
    <>
      <div className="mt-5">
        <div className="py-2 border bg-red-100">Layer 1</div>
        <div className="flex flex-row justify-between py-2 border">
          {/* <div className="bg-yellow-200 w-full py-12 text-center">B1</div>
          <div className="bg-green-200 w-full py-12 text-center">B2</div> */}
          <BetButton
            direction="down"
            betDirection={betDirection}
            setBetDirection={setBetDirection}
          />
          <BetButton
            direction="up"
            betDirection={betDirection}
            setBetDirection={setBetDirection}
          />
        </div>
        <div className="py-2 border bg-fuchsia-100">Layer 3</div>
      </div>
    </>
  );
}

export default BetBox;
