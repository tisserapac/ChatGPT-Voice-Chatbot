import React from "react";

const buttonDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
);

const buttonUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
    />
  </svg>
);

type Props = {
  direction: string;
  betDirection: string;
  setBetDirection: any;
};

function BetButton({ direction, betDirection, setBetDirection }: Props) {
  return (
    <div className="mx-auto py-12">
      {direction == "up" ? (
        <button
          onClick={() => setBetDirection("up")}
          className={
            "transition-all duration-300 p-10 rounded-full border " +
            (betDirection == "up" ? "bg-green-400" : "bg-gray-200")
          }
        >
          {buttonUp}
        </button>
      ) : (
        <button
          onClick={() => setBetDirection("down")}
          className={
            "transition-all duration-300 p-10 rounded-full border " +
            (betDirection == "down" ? "bg-red-400" : "bg-gray-200")
          }
        >
          {buttonDown}
        </button>
      )}
    </div>
  );
}

export default BetButton;
