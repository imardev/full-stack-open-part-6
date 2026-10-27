import { useAnecdotes } from "../store";
export default function AnecdoteList({ vote }) {
  const anecdotes = useAnecdotes();
  const ordenatedAnecdotesList = anecdotes.toSorted(
    (a, b) => b.votes - a.votes,
  );
  return (
    <section>
      {ordenatedAnecdotesList.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </section>
  );
}
