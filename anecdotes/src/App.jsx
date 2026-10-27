import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import { useAnecdoteControls } from "./store";

const App = () => {
  const { addVote } = useAnecdoteControls();

  const vote = (id) => {
    addVote(id);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList vote={vote} />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
