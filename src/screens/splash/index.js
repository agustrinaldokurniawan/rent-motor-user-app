import { Center, Text } from "native-base";
import { useEffect } from "react";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/reducer/location";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();
  const onPressStart = () => {
    navigation.navigate("Login");
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log({ status });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(setLocation(location));
    })();
  }, []);

  return (
    <Center flex={1}>
      <Text>Splash</Text>
    </Center>
  );
}
