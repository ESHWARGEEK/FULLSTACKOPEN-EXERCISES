const MostVote = ({ anecdote, votes }) => {
  if (votes === 0) {
    return <h2>Ancedote yet to be voted</h2>;
  } else {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
      </div>
    );
  }
};

export default MostVote;
