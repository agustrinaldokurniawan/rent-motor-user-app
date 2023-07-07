import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./routes";
import BottomTab from "./BottomTab";

export const Stack = createNativeStackNavigator()

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        statusBarStyle: 'dark',
        headerShadowVisible: false,
        headerTitle: '',
      }}
        initialRouteName="Home"
      >
        <Stack.Screen options={{ headerShown: false }} name="Bottomtab" component={BottomTab} />
        {routes.map((item, key) => (
          <Stack.Screen key={key} name={item.name} component={item.component} options={item.options} />))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}