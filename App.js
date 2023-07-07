import { NativeBaseProvider } from "native-base";
import { theme } from "./src/themes/index";
import Navigations from './src/navigations'
import { QueryClient, QueryClientProvider } from "react-query";
import { Snackbar } from '@ouroboros/react-native-snackbar';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Snackbar />
        <Navigations />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}