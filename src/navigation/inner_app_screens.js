import NewConsultationScreen from "../screens/ConsultationScreen";
import DashboardScreen from "../screens/DashboardScreen";


export default [
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    options: { headerShown: false },
  },
  
  {
    name: 'NewConsultationScreen',
    component: NewConsultationScreen,
    options: { headerShown: false },
  },
];