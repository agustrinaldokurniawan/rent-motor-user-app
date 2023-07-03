import ForgetPasswordScreen from "../forget-password";
import LoginScreen from "../login";
import SignupScreen from "../signup";
import VerifyOtpScreen from "../verify-otp";

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
    name: 'VerifyOtp',
    component: VerifyOtpScreen
  }
]