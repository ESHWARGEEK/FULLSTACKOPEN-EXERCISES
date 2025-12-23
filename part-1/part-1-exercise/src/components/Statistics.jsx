const Statistics = ({ total, average, percentage, good, bad, neutral }) => {
  if (good + neutral + bad !== 0) {
    return (
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {total}</p>
        <p>average: {average}</p>
        <p>positive {percentage}</p>
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
