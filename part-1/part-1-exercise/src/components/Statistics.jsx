import StatisticLine from "./StatisticLine";
const Statistics = ({ total, average, percentage, good, bad, neutral }) => {
  if (good + neutral + bad !== 0) {
    return (
      <div>
        <StatisticLine good="good" good_value={good} />
        <StatisticLine neutral="neutral" neutral_value={neutral} />
        <StatisticLine bad="bad" bad_value={bad} />
        <StatisticLine total="all" total_value={total} />
        <StatisticLine average="average" average_value={average} />
        <StatisticLine percentage="positive" percentage_value={percentage} />
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
