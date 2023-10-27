import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PetList } from "./PetList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Mock Server Example</h1>
        <PetList mockBehavior="success" />
        <PetList mockBehavior="empty" />
        <PetList mockBehavior="not-found" />
        <PetList mockBehavior="error" />
      </main>
    </QueryClientProvider>
  );
}
