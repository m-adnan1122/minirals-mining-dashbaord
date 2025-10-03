"use client";

import Integration from '@/components/settings/Integration';
import Security from '@/components/settings/Security';
import Settings from '@/components/settings/Settings';
import SidebarTabs from '@/components/SideBar';
import { Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';

const page = ({ selectedTab }) => {
  const [selected, setSelected] = useState("General Settings");


  const renderContent = () => {
        switch (selected) {
          case "General Settings": return <Settings />;
          case "Account Security": return <Security />;
          case "Integrations Settings": return <Integration />;
          default: return null;
        }
  };

  const tabs = [
    { label: "General Settings", icon: "/icons/dashboard.png" },
    { label: "Account Security", icon: "/icons/data.png" },
    { label: "Integrations Settings", icon: "/icons/setting.png" },
  ];

  return (
    <Stack
      direction="row"
      width="100%"
      height="100%"
      bgcolor="rgb(249, 249, 249)"
    >
        <Stack
          width="226px"
          bgcolor="white"
          mt={0.5}
          sx={{
            borderTopRightRadius: "8px",
          }}
        >
          <SidebarTabs tabs={tabs} selected={selected} setSelected={setSelected} />
        </Stack>

      <Stack pl={6} pt={5} flex={1}>
        {renderContent()}
      </Stack>
    </Stack>
  );
};

export default page;
