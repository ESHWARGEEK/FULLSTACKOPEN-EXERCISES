import { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log("good before", good);
    const goodNow = good + 1;
    console.log("good after", goodNow);
    setGood(goodNow);
  };

  const handleBad = () => {
    console.log("bad before", bad);
    const badNow = bad + 1;
    console.log("bad after", badNow);
    setBad(badNow);
  };

  const handleNeutral = () => {
    console.log("Neutral before", neutral);
    const neutralNow = neutral + 1;
    console.log("Neutral after", neutralNow);
    setNeutral(neutralNow);
  };

  const total = (good, bad, neutral) => {
    return good + bad + neutral;
  };

  const average = (good, bad, neutral) => {
    const total_value = total(good, bad, neutral);
    return (good - bad) / total_value;
  };

  const percentage = (good, bad, neutral) => {
    return (good / total(good, bad, neutral)) * 100 + " %";
  };

  return (
    <div>
      <Header header={"give feedback"} />
      <Buttons onClick={handleGood} text={"good"} />
      <Buttons onClick={handleNeutral} text={"neutral"} />
      <Buttons onClick={handleBad} text={"bad"} />
      <Header header={"statistics"} />
      <Result name={"good"} score={good} />
      <Result name={"neutral"} score={neutral} />
      <Result name={"bad"} score={bad} />
      <Statistics name={"all"} data={good + bad + neutral} />
      <Statistics name={"average"} data={average(good, bad, neutral)} />
      <Statistics name={"positive"} data={percentage(good, bad, neutral)} />
    </div>
  );
};

export default App;
