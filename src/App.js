import "./App.css";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Cats />
    </QueryClientProvider>
  );
}

function Cats() {
  return <div className="App">Cats</div>;
}

export default App;
