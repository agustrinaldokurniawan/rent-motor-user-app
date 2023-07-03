import { NativeBaseProvider } from "native-base";
import { theme } from "./src/themes/index";
import Navigations from './src/navigations'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigations/>
    </NativeBaseProvider>
  );
}