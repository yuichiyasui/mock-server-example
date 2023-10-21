import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Mock Server Example</h1>
      </main>
    </QueryClientProvider>
  );
}
