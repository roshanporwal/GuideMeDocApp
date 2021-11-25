import NewConsultationScreen from "../screens/ConsultationScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DiagnosticScreen from "../screens/DiagnosticScreen";
import LabTestsScreen from "../screens/LabTestsScreen";
import PharmacyScreen from "../screens/PharmacyScreen";
import SecondOpinionScreen from "../screens/SecondOpinionScreen";


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

  {
    name: 'SecondOpinionScreen',
    component: SecondOpinionScreen,
    options: { headerShown: false },
  },
  {
    name: 'PharmacyScreen',
    component: PharmacyScreen,
    options: { headerShown: false },
  },
  {
    name: 'DiagnosticScreen',
    component: DiagnosticScreen,
    options: { headerShown: false },
  },
  
  {
    name: 'LabTestsScreen',
    component: LabTestsScreen,
    options: { headerShown: false },
  },
];