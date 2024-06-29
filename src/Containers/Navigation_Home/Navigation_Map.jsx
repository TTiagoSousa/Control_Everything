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

  // {
  //   text: 'Assets',
  //   icon: <Icon.Dashboard_Cubes />,
  //   dropdownItems: [
  //     { to: '/CE/Savings_Dashboard', text: 'Savings' },
  //   ],
  // },

  // { to: '/CE/Academy', text: 'Academy', icon: <Icon.Dashboard_Cubes /> },

  // {
  //   text: 'efef',
  //   icon: <Icon.Sun_N1 />,
  //   dropdownItems: [
  //     { to: '/CE/Crypto_Dashboard', text: 'Crypto' },
  //     { to: '/CE/Savingsykyuky_Dashboard', text: 'Savings' },

  //   ],
  // },
  // {
  //   text: 'Dropdown',
  //   icon: <Icon.Dashboard_Cubes />,
  //   dropdownItems: [
  //     { to: '/CE/Dropdown1', text: 'Dropdown 1' },
  //     { to: '/CE/Dropdown2', text: 'Dropdown 2' },
  //     // Add more dropdown items as needed
  //   ],
  // },
];