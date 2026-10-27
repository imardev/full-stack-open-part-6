import { useAnecdoteControls } from "../store";
export default function AnecdoteForm() {
  const { add } = useAnecdoteControls();
  const getId = () => (100000 * Math.random()).toFixed(0);
  const submitAnecdote = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    add({ content: anecdote, id: getId(), votes: 0 });
  };
  return (
    <form onSubmit={submitAnecdote}>
      <input type="text" name="anecdote" />
      <button type="submit">Add</button>
    </form>
  );
}
