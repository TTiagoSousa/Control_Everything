 import * as Icon from '../../Imports/icons';
export const navItems = [

  { to: '/CE/Dashboard', text: 'Home', icon: <Icon.Dashboard_Cubes /> },

  {
    text: 'Assets',
    icon: <Icon.Wallet />,
    dropdownItems: [
      { to: '/CE/Savings_Dashboard', text: 'Savings' },
    ],
  },
  
  { to: '/CE/Academy', text: 'Academy', icon: <Icon.Academy_Cap /> },

  { to: '/CE/Settings', text: 'Settings', icon: <Icon.Settings /> },

];