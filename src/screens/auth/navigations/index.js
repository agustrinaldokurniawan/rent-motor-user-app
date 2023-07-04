import ForgetPasswordScreen from "../forget-password";
import LoginScreen from "../login";
import SignupScreen from "../signup";
import VerifyEmailScreen from "../verify-email";
import NewPasswordScreen from '../new-password'

export const AuthNavigations = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Signup',
    component: SignupScreen
  },
  {
    name: 'ForgetPassword',
    component: ForgetPasswordScreen
  },
  {
    name: 'VerifyEmail',
    component: VerifyEmailScreen
  },
  {
    name: 'NewPassword',
    component: NewPasswordScreen
  }
]