import TabNavigation from "../navigation/TabNavigation";
import LandingPageOne from "./LandingPageOne";
import LandingPageThree from "./LandingPageThree";
import LandingPageTwo from "./LandingPageTwo";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

export default [
  {
    name: 'Tabs',
    component: TabNavigation,
    options: { headerShown: false },
  },
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
];