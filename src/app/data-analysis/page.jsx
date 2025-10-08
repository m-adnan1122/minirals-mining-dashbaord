"use client";

import OperationalAnalysis from '@/components/data-analysis/operationalAnalysis';
import SidebarTabs from '@/components/SideBar';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import All from '@/components/data-analysis/All';

const DataAnalysis = () => {
  const [selected, setSelected] = useState("Operational Data");


  const renderContent = () => {
        switch (selected) {
          case "Operational Data": return <OperationalAnalysis />;
          case "Geological Data": return <All />;
          default: return null;
        }
  };

  const tabs = [
    { label: "Operational Data", icon: "/icons/data-analysis.png" },
    { label: "Geological Data", icon: "/icons/data.png" },
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
          <SidebarTabs header={"Data Analysis"} tabs={tabs} selected={selected} setSelected={setSelected} />
        </Stack>

      <Stack pl={3.5} pt={5} flex={1}>
       <Typography
        variant="h6" sx={{fontWeight: 600, fontSize: "24px", pb: 2, pt:0.5}}>{selected}</Typography>
        {renderContent()}
      </Stack>
    </Stack>
  );
};

export default DataAnalysis;
