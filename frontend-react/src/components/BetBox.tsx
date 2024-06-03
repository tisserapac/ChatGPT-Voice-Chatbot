import BetButton from "./BetButton";

type Props = {
  betDirection: string;
  setBetDirection: any;
  isLoading: boolean;
  hasWon: boolean;
  valStored: number;
};

function BetBox({
  betDirection,
  setBetDirection,
  isLoading,
  hasWon,
  valStored,
}: Props) {
  return (
    <>
      <div className="mt-5">
        <div className="py-4 border bg-gray-800 text-white text-right pr-5">
          {isLoading ? "Loading ..." : `Random number returned: ${valStored}`}
        </div>
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
        <div className="py-2 border bg-gray-200 text-center text-3xl font-bold">
          {valStored != 0 && (
            <div className={"" + (hasWon ? "text-green-500" : "text-red-500")}>
              {hasWon ? "Winner" : "Bad Luck"}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BetBox;
