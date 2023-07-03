import { AuthNavigations } from "../screens/auth/navigations";
import { HomeNavigations } from "../screens/home/navigations";
import { SplashNavigation } from "../screens/splash/navigations";

export const routes = [
  ...SplashNavigation,
  ...AuthNavigations,
  ...HomeNavigations
]