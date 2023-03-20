import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import React from "react";

export const menuList = [
  {
    icon: <HomeOutlinedIcon/>,
    title: 'Dashboard',
    to:'/demo-page',
    type:'group',
    items: []
  },
  {
    icon: <FilterAltOutlinedIcon/>,
    title: 'Combustion Module',
    type:'group',
    items: [
      {
        title:'Measure',
        to:'combustion/measure',
        type:'item',
      },
      {
        title:'Help',
        to: 'combustion/help',
        type:'item',
      },
      {
        title:'Report',
        to: 'combustion/report',
        type:'item',
      },
      ]
  },
  {
    icon: <AdminPanelSettingsIcon/>,
    title: 'Admin Module',
    type:'group',
    items: [
      {
        title:'Admin Control',
        to:'combustion/measure',
        type:'item',
      },
      {
        title:'Client Control',
        to: 'combustion/help',
        type:'item',
      },
      {
        title:'Report',
        to: 'combustion/report',
        type:'item',
      },
      ]
  }
];
