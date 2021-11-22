import DashboardScreen from "./DashboardScreen";
import LandingPageOne from "./LandingPageOne";
import LandingPageThree from "./LandingPageThree";
import LandingPageTwo from "./LandingPageTwo";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

export default [
  {
    name: 'LandingPageOne',
    component: LandingPageOne,
    options: { headerShown: false },
  },
  {
    name: 'LandingPageTwo',
    component: LandingPageTwo,
    options: { headerShown: false },
  },
  {
    name: 'LandingPageThree',
    component: LandingPageThree,
    options: { headerShown: false },
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'SignUpScreen',
    component: SignUpScreen,
    options: { headerShown: false },
  },
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    options: { headerShown: false },
  },
];