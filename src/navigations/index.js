import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./routes";

export const Stack = createNativeStackNavigator()

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        statusBarStyle: 'dark',
        headerShadowVisible: false,
        headerTitle: '',
      }}>
        {routes.map((item, key) => (
          <Stack.Screen key={key} name={item.name} component={item.component} options={item.options} />))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}