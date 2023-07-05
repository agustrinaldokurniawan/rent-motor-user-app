import { AuthNavigations } from "../screens/auth/navigations";
import { HomeNavigations } from "../screens/home/navigations";
import { MotorNavigations } from "../screens/motor/navigations";
import { OrderNavigation } from "../screens/order/navigations";
import { SplashNavigation } from "../screens/splash/navigations";

export const routes = [
  ...SplashNavigation,
  ...AuthNavigations,
  ...HomeNavigations,
  ...MotorNavigations,
  ...OrderNavigation
]