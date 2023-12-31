import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Screens from "./src/screens";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Screens />
      </QueryClientProvider>
    </Provider>
  );
}
