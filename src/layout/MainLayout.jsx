"use client";
import DashboardProfile from '@/components/Dashboard/DashboardProfile';
import Integration from '@/components/settings/Integration';
import Security from '@/components/settings/Security';
import Settings from '@/components/settings/Settings';
import SidebarTabs from '@/components/SideBar';
import { Stack } from '@mui/material';
import React, { useState } from 'react';

const MainLayout = ({ selectedTab, children, sidebar, profile,setSelectedTab }) => {
      const [selected, setSelected] = useState("General Settings");

      if(profile)
        setSelectedTab("profile")
    
  const renderContent = () => {
    switch (selectedTab) {
      case 'dashboard':
        return         "dash";
      case 'profile':
       return profile ? <DashboardProfile /> : <div>No profile available</div>;
      case 'data analysis':
        return <div>Data Analysis Content</div>;
      case 'workflow':
        return <div>Workflow Integration Content</div>;
      case 'data management':
        return <div>Data Management Content</div>;
      case 'user management':
        return <div>User Management Content</div>;
      case 'settings':
         switch (selected) {
  case "General Settings": return <Settings />;
  case "Account Security": return <Security />;
  case "Data Preferences": return <DataPreferences />;
  case "Integrations Settings": return <Integration />;
  default: return null;
}

      default:
        return null;
    }
  };

  const tabs = [
    { label: "General Settings", icon: "/icons/dashboard.png"},
    { label: "Account Security", icon: "/icons/data.png" },
    { label: "Integrations Settings", icon: "/icons/setting.png" },
  ];

  return (
    <Stack direction="row" width="100%" height="100%" bgcolor={ selectedTab === "settings"? "rgb(249, 249, 249)" : "#ffffff"}>
      { selectedTab === "settings" &&
      <Stack
        width="226px"
        bgcolor="white"
        mt={0.5}
        sx={{
          borderTopRightRadius: "8px",
        }}
      > 
        <SidebarTabs tabs={tabs} selected={selected} setSelected={setSelected} />
      </Stack>}
      
     
      
      <Stack pl={6} pt={5} flex={1}>
        {renderContent()}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
