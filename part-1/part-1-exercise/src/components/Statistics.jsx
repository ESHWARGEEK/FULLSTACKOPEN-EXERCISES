import StatisticLine from "./StatisticLine";
const Statistics = ({ total, average, percentage, good, bad, neutral }) => {
  if (good + neutral + bad !== 0) {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={percentage} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    );
  }
};

export default Statistics;
