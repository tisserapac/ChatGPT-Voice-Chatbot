import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import BetBox from "./BetBox";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");

  const handlePlaceBet = async () => {
    let isWinner = false;
    const url =
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data;
          console.log(val);
          if (val >= 50 && betDirection == "up") {
            isWinner = true;
          } else if (val < 50 && betDirection == "down") {
            isWinner = true;
          }
        } else {
          console.error("Error occuered in fetching a random number!");
        }
      })
      .catch((err) => {
        console.log(err.data, err.message);
      });
    // Return winner result
    setHasWon(isWinner);
  };

  useEffect(() => {
    console.log("hasWon: " + hasWon);
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] py-12 mx-auto px-5">
      <Button runFunction={handlePlaceBet} />
      <BetBox betDirection={betDirection} setBetDirection={setBetDirection} />
    </div>
  );
}

export default Controller;
