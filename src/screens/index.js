import { NativeBaseProvider } from "native-base";
import { theme } from "../themes/index";
import { Snackbar } from "@ouroboros/react-native-snackbar";
import { useEffect, useState } from "react";
import SplashScreen from "./splash/index";
import { useDispatch } from "react-redux";
import { getUser } from "../utils/keep-login";
import { setUser } from "../redux/reducer/user";
import Navigations from "../navigations";
import { LogBox } from "react-native";

export default function Screens() {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    async function prepare() {
      try {
        const user = await getUser();
        console.log({ user });
        dispatch(setUser(user));
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Snackbar />
      {appIsReady ? <Navigations /> : <SplashScreen />}
    </NativeBaseProvider>
  );
}
